'use client';

import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/shared/page-header';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  LayoutDashboard,
  Workflow,
  MessageSquare,
  Wrench,
  Phone,
  Package,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Workflow,
  MessageSquare,
  Wrench,
  Phone,
  Package,
};

const preSalesItems = [
  { key: 'layout', icon: 'LayoutDashboard' },
  { key: 'materialFlow', icon: 'Workflow' },
  { key: 'consulting', icon: 'MessageSquare' },
];

const afterSalesItems = [
  { key: 'routineMaintenance', icon: 'Wrench' },
  { key: 'callService', icon: 'Phone' },
  { key: 'spareParts', icon: 'Package' },
];

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t('services.pageTitle')}
        subtitle={t('services.pageSubtitle')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Pre-Sales Services */}
          <div className="mb-16">
            <SectionHeading
              title={t('services.preSalesTitle')}
              subtitle={t('services.preSalesSubtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preSalesItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Card key={item.key} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#0099CC]">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-[#0099CC]/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#0099CC]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(`services.items.${item.key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t(`services.items.${item.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* After-Sales Services */}
          <div>
            <SectionHeading
              title={t('services.afterSalesTitle')}
              subtitle={t('services.afterSalesSubtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {afterSalesItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Card key={item.key} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#000066]">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-[#000066]/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#000066]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t(`services.items.${item.key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t(`services.items.${item.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
