'use client';

import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { companyInfo } from '@/data/company';
import { localized } from '@/lib/locale';
import { submitContactForm } from '@/app/actions/contact';
import { MapPin, Phone as PhoneIcon, Mail, Printer } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm({
        name: formData.get('name') as string,
        title: formData.get('title') as string || '',
        company: formData.get('company') as string || '',
        address: formData.get('address') as string || '',
        phone: formData.get('phone') as string || '',
        fax: formData.get('fax') as string || '',
        email: formData.get('email') as string,
        comments: formData.get('message') as string,
      });

      if (result.success) {
        toast.success(t('contact.successMessage'));
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(t('contact.errorMessage'));
      }
    } catch {
      toast.error(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        title={t('contact.pageTitle')}
        subtitle={t('contact.pageSubtitle')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-8">
                {t('contact.formIntro')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden field for Formspree to know the recipient */}
                <input type="hidden" name="_replyto" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">
                      {t('contact.name')} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="name" name="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="title">{t('contact.title')}</Label>
                    <Input id="title" name="title" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">{t('contact.companyName')}</Label>
                    <Input id="company" name="company" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address">{t('contact.address')}</Label>
                    <Input id="address" name="address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('contact.phone')}</Label>
                    <Input id="phone" name="phone" type="tel" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="fax">{t('contact.fax')}</Label>
                    <Input id="fax" name="fax" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    {t('contact.email')} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="comments">
                    {t('contact.comments')} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="comments"
                    name="message"
                    required
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0099CC] hover:bg-[#007AA3] text-white"
                  >
                    {isSubmitting ? '...' : t('contact.submit')}
                  </Button>
                  <Button type="reset" variant="outline">
                    {t('contact.reset')}
                  </Button>
                </div>
              </form>
            </div>

            {/* Company Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {t('contact.companyInfo')}
                  </h3>
                  <div className="text-sm font-medium text-[#0099CC] mb-4">
                    {localized(locale, companyInfo.nameEn, companyInfo.nameZh, companyInfo.nameDe)}
                  </div>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0099CC] mt-0.5 shrink-0" />
                      <span>{localized(locale, companyInfo.address.en, companyInfo.address.zh, companyInfo.address.de)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-5 w-5 text-[#0099CC] shrink-0" />
                      <a href={`tel:${companyInfo.phone}`} className="hover:text-[#0099CC]">
                        {companyInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Printer className="h-5 w-5 text-[#0099CC] shrink-0" />
                      <span>{companyInfo.fax}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#0099CC] shrink-0" />
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-[#0099CC]">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
