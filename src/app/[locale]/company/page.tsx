'use client';

import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/shared/page-header';
import { SectionHeading } from '@/components/shared/section-heading';
import { companyInfo } from '@/data/company';
import { localized } from '@/lib/locale';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Building2, MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function CompanyPage() {
  const t = useTranslations();
  const locale = useLocale();

  const salesRange = t.raw('company.salesRange') as string[];
  const serviceDepots = t.raw('company.serviceDepots') as string[];

  return (
    <>
      <PageHeader
        title={t('company.pageTitle')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Company Overview Card */}
          <Card className="mb-12 border-[#0099CC]/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#000066]">
                    {localized(locale, companyInfo.nameEn, companyInfo.nameZh, companyInfo.nameDe)}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-[#0099CC]" />
                      <span>{t('company.established')}: {companyInfo.established}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-[#0099CC] mt-0.5" />
                      <span>{localized(locale, companyInfo.address.en, companyInfo.address.zh, companyInfo.address.de)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[#0099CC]" />
                      <span>{companyInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-[#0099CC]" />
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-[#0099CC] transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <blockquote className="text-center">
                    <p className="text-2xl font-bold text-[#0099CC] italic">
                      &ldquo;{localized(locale, companyInfo.motto.en, companyInfo.motto.zh, companyInfo.motto.de)}&rdquo;
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {t('company.principleTitle')}
                    </p>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sales Range */}
          <div className="mb-12">
            <SectionHeading title={t('company.salesRangeTitle')} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {salesRange.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50">
                  <Badge variant="outline" className="shrink-0 text-[#0099CC] border-[#0099CC]">
                    {index + 1}
                  </Badge>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Background */}
          <div className="mb-12">
            <SectionHeading title={t('company.backgroundTitle')} />
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              {t('company.backgroundText')}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Business Principle */}
          <div className="mb-12">
            <SectionHeading title={t('company.principleTitle')} />
            <div className="bg-gradient-to-r from-[#000066] to-[#0099CC] rounded-lg p-8 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white italic">
                &ldquo;{t('company.principleText')}&rdquo;
              </p>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Marketing Expansion */}
          <div className="mb-12">
            <SectionHeading title={t('company.marketingTitle')} />
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              {t('company.marketingText')}
            </p>
          </div>

          <Separator className="my-12" />

          {/* After-Sales Service */}
          <div className="mb-12">
            <SectionHeading title={t('company.afterSalesTitle')} />
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-6">
              {t('company.afterSalesText')}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('company.serviceDepotsTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceDepots.map((depot: string, index: number) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <Building2 className="h-8 w-8 text-[#0099CC] mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{depot}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
