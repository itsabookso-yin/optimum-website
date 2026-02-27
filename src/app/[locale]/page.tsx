import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/shared/section-heading';
import { productCategories } from '@/data/products';
import { localized } from '@/lib/locale';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000066] via-[#003366] to-[#0099CC] py-20 md:py-32">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#0099CC] hover:bg-[#007AA3] text-white">
                <Link href={`/${locale}/products`}>
                  {t('home.heroCta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href={`/${locale}/contact`}>
                  {t('home.ctaButton')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('home.featuredTitle')}
            subtitle={t('home.featuredSubtitle')}
            className="text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/${locale}/products/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden">
                  <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                    <Image
                      src={category.thumbnail}
                      alt={localized(locale, category.nameEn, category.nameZh, category.nameDe)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#0099CC] transition-colors">
                      {localized(locale, category.nameEn, category.nameZh, category.nameDe)}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {localized(locale, category.descriptionEn, category.descriptionZh, category.descriptionDe)}
                    </p>
                    <div className="mt-3 flex items-center text-[#0099CC] text-sm font-medium">
                      {t('products.viewDetails')}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title={t('home.introTitle')} />
              <p className="text-gray-600 leading-relaxed">
                {t('home.introText')}
              </p>
              <blockquote className="mt-6 border-l-4 border-[#0099CC] pl-4 italic text-[#000066] text-lg font-medium">
                &ldquo;{t('home.motto')}&rdquo;
              </blockquote>
              <Button asChild variant="outline" className="mt-6 border-[#0099CC] text-[#0099CC] hover:bg-[#0099CC] hover:text-white">
                <Link href={`/${locale}/company`}>
                  {t('common.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/images/hero/home-hero-main.jpg"
                alt="OPTIMUM products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#000066] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {t('home.ctaTitle')}
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            {t('home.ctaText')}
          </p>
          <Button asChild size="lg" className="mt-8 bg-[#0099CC] hover:bg-[#007AA3] text-white">
            <Link href={`/${locale}/contact`}>
              {t('home.ctaButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
