export interface NavItem {
  labelKey: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.products', href: '/products' },
  { labelKey: 'nav.brands', href: '/brands' },
  { labelKey: 'nav.company', href: '/company' },
  { labelKey: 'nav.services', href: '/services' },
  { labelKey: 'nav.contact', href: '/contact' },
];
