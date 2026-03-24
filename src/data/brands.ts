import { assetPath } from '@/lib/utils';

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
  website: string;
  partnerPageUrl?: string;
  partnerScreenshot?: string;
  descriptionEn: string;
  descriptionZh: string;
  descriptionDe: string;
  productCategories: string[];
}

export const brands: Brand[] = [
  {
    id: 'hoermann',
    name: 'Hörmann',
    country: 'Germany',
    logo: assetPath('/images/brands/hoermann/logo.svg'),
    website: 'https://www.hoermann.com',
    partnerPageUrl: 'https://www.hoermann.com/en/hoermann-worldwide/sales-companies-and-distribution-partners/',
    partnerScreenshot: assetPath('/images/brands/hoermann/partner-verification.png'),
    descriptionEn: 'Europe\'s leading manufacturer of doors, gates, frames and operators. Hörmann offers a comprehensive range of industrial and commercial doors, loading technology, and residential garage doors.',
    descriptionZh: '歐洲領先的門、閘門、門框及驅動器製造商。Hörmann 提供全面的工業門、商用門、裝卸技術及住宅車庫門產品。',
    descriptionDe: 'Europas führender Hersteller von Toren, Türen, Zargen und Antrieben. Hörmann bietet ein umfassendes Sortiment an Industrie- und Gewerbetoren, Verladetechnik und Garagentoren.',
    productCategories: ['door-system', 'garage-door', 'dock-loading'],
  },
  // Add more brands below as needed:
  // {
  //   id: 'brand-id',
  //   name: 'Brand Name',
  //   country: 'Country',
  //   logo: assetPath('/images/brands/brand-id/logo.png'),
  //   website: 'https://www.example.com',
  //   partnerPageUrl: 'https://www.example.com/partners',
  //   partnerScreenshot: assetPath('/images/brands/brand-id/partner-verification.png'),
  //   descriptionEn: 'English description',
  //   descriptionZh: '中文描述',
  //   descriptionDe: 'Deutsche Beschreibung',
  //   productCategories: [],
  // },
];
