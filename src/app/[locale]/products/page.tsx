import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { productCategories } from '@/data/products';
import { localized } from '@/lib/locale';
import { ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <PageHeader
        title={t('products.pageTitle')}
        subtitle={t('products.pageSubtitle')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/${locale}/products/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all group cursor-pointer overflow-hidden border-2 hover:border-[#0099CC]/30">
                  <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                    <Image
                      src={category.thumbnail}
                      alt={localized(locale, category.nameEn, category.nameZh, category.nameDe)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-bold text-xl text-gray-900 group-hover:text-[#0099CC] transition-colors">
                      {localized(locale, category.nameEn, category.nameZh, category.nameDe)}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      {localized(locale, category.descriptionEn, category.descriptionZh, category.descriptionDe)}
                    </p>
                    <p className="mt-3 text-xs text-gray-500">
                      {category.items.length} {localized(locale, 'products', '項產品', 'Produkte')}
                    </p>
                    <div className="mt-4 flex items-center text-[#0099CC] text-sm font-medium">
                      {t('products.viewDetails')}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
