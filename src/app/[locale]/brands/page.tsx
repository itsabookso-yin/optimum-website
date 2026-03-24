'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { brands } from '@/data/brands';
import { localized } from '@/lib/locale';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function BrandsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <PageHeader
        title={t('brands.pageTitle')}
        subtitle={t('brands.pageSubtitle')}
      />

      {/* Intro */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-gray-600 leading-relaxed">
            {t('brands.intro')}
          </p>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand) => (
              <Card key={brand.id} className="overflow-hidden border hover:border-[#0099CC]/40 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  {/* Logo Banner */}
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 border-b border-gray-100 group"
                  >
                    <div className="w-full h-20 relative">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </a>

                  {/* Info */}
                  <div className="p-5">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {localized(locale, brand.descriptionEn, brand.descriptionZh, brand.descriptionDe)}
                    </p>

                    {/* Partner Verification + Website Link */}
                    <div className="mt-4 flex items-center justify-between">
                      {brand.partnerScreenshot ? (
                        <a
                          href={brand.partnerPageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-green-700 hover:text-green-800 text-xs font-semibold transition-colors"
                        >
                          <ShieldCheck className="h-4 w-4 text-green-600" />
                          {t('brands.verifiedPartner')}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span />
                      )}
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0099CC] hover:text-[#007AA3] text-sm font-medium transition-colors"
                      >
                        {t('brands.visitWebsite')}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Partner Screenshot */}
                  {brand.partnerScreenshot && (
                    <a
                      href={brand.partnerPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border-t border-gray-100 bg-gray-50 p-4"
                    >
                      <p className="text-xs text-gray-400 mb-2 text-center">{t('brands.screenshotCaption')}</p>
                      <div className="relative rounded overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                          src={brand.partnerScreenshot}
                          alt={`OPTIMUM listed on ${brand.name} website`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                          <span className="bg-white/90 text-xs text-gray-600 px-3 py-1.5 rounded-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                            {t('brands.viewOnWebsite')}
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
