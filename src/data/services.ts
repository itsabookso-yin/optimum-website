export interface ServiceItem {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export const preSalesServices: ServiceItem[] = [
  {
    id: 'layout',
    icon: 'LayoutDashboard',
    titleKey: 'services.items.layout.title',
    descriptionKey: 'services.items.layout.description',
  },
  {
    id: 'materialFlow',
    icon: 'Workflow',
    titleKey: 'services.items.materialFlow.title',
    descriptionKey: 'services.items.materialFlow.description',
  },
  {
    id: 'consulting',
    icon: 'MessageSquare',
    titleKey: 'services.items.consulting.title',
    descriptionKey: 'services.items.consulting.description',
  },
];

export const afterSalesServices: ServiceItem[] = [
  {
    id: 'routineMaintenance',
    icon: 'Wrench',
    titleKey: 'services.items.routineMaintenance.title',
    descriptionKey: 'services.items.routineMaintenance.description',
  },
  {
    id: 'callService',
    icon: 'Phone',
    titleKey: 'services.items.callService.title',
    descriptionKey: 'services.items.callService.description',
  },
  {
    id: 'spareParts',
    icon: 'Package',
    titleKey: 'services.items.spareParts.title',
    descriptionKey: 'services.items.spareParts.description',
  },
];
