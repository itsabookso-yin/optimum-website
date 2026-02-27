import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { companyInfo } from '@/data/company';
import { mainNavItems } from '@/data/navigation';
import { localized } from '@/lib/locale';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-[#000033] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">OPTIMUM</h3>
            <p className="text-sm mb-2">
              {localized(locale, companyInfo.nameEn, companyInfo.nameZh, companyInfo.nameDe)}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href === '/' ? '' : item.href}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Motto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {localized(locale, 'Our Principle', '經營理念', 'Unser Grundsatz')}
            </h3>
            <blockquote className="text-[#0099CC] italic text-lg font-medium">
              &ldquo;{localized(locale, companyInfo.motto.en, companyInfo.motto.zh, companyInfo.motto.de)}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm">
              {localized(
                locale,
                `Established ${companyInfo.established}`,
                `創立於 ${companyInfo.established} 年`,
                `Gegründet ${companyInfo.established}`
              )}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
