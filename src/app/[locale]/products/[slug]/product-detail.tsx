'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/shared/page-header';
import { ProductImageGallery } from '@/components/shared/product-image-gallery';
import { productCategories, getProductBySlug } from '@/data/products';
import { localized } from '@/lib/locale';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const t = useTranslations();
  const locale = useLocale();
  const category = getProductBySlug(slug);

  if (!category) {
    return null;
  }

  return (
    <>
      <PageHeader
        title={localized(locale, category.nameEn, category.nameZh, category.nameDe)}
        subtitle={localized(locale, category.descriptionEn, category.descriptionZh, category.descriptionDe)}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href={`/${locale}/products`} className="hover:text-[#0099CC] transition-colors">
              {t('products.backToProducts')}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">
              {localized(locale, category.nameEn, category.nameZh, category.nameDe)}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Product Categories */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {t('products.pageTitle')}
                </h3>
                <nav className="flex flex-col gap-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${locale}/products/${cat.slug}`}
                      className={`text-sm px-3 py-2 rounded-md transition-colors ${
                        cat.slug === slug
                          ? 'bg-[#0099CC] text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {localized(locale, cat.nameEn, cat.nameZh, cat.nameDe)}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content - Product Items */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {t('products.subProducts')}
              </h2>

              <div className="space-y-8">
                {category.items.map((item, index) => (
                  <div key={item.id}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Images */}
                          <ProductImageGallery
                            images={item.images}
                            alt={localized(locale, item.nameEn, item.nameZh, item.nameDe)}
                          />

                          {/* Details */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {localized(locale, item.nameEn, item.nameZh, item.nameDe)}
                            </h3>
                            {locale !== 'en' && (
                              <p className="text-sm text-gray-500 mt-1">{item.nameEn}</p>
                            )}
                            <p className="mt-4 text-gray-600 leading-relaxed">
                              {localized(locale, item.descriptionEn, item.descriptionZh, item.descriptionDe)}
                            </p>

                            {item.features && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                  {t('products.features')}
                                </h4>
                                <ul className="space-y-1">
                                  {(item.features[locale as 'en' | 'zh' | 'de'] ?? item.features.en).map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="text-[#0099CC] mt-1">&#8226;</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="mt-4">
                              <Badge variant="secondary" className="text-xs">
                                {category.items.length > 1
                                  ? `${index + 1} / ${category.items.length}`
                                  : localized(locale, category.nameEn, category.nameZh, category.nameDe)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {index < category.items.length - 1 && <Separator className="mt-8" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
