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
  {
    id: 'poweramp',
    name: 'Poweramp',
    country: 'USA',
    logo: assetPath('/images/brands/poweramp/logo.jpg'),
    website: 'https://www.poweramp.com',
    descriptionEn: 'American loading dock equipment manufacturer with 60+ years of experience. Specializes in dock levelers, vehicle restraints, dock seals and shelters.',
    descriptionZh: '美國碼頭裝卸設備製造商，超過60年經驗。專業生產月台調整板、車輛固定器、門封及門罩。',
    descriptionDe: 'Amerikanischer Hersteller von Verladerampen-Ausrüstung mit über 60 Jahren Erfahrung. Spezialisiert auf Überladebrücken, Fahrzeugrückhaltesysteme und Torabdichtungen.',
    productCategories: ['dock-loading'],
  },
  {
    id: 'marco',
    name: 'Marco',
    country: 'Sweden',
    logo: assetPath('/images/brands/marco/logo.png'),
    website: 'https://marcolift.com',
    descriptionEn: 'Swedish SIGI brand specializing in scissor lifts and vertical positioning. Products include dock lifts, goods lifts, work platforms and stage technology.',
    descriptionZh: '瑞典 SIGI 集團旗下品牌，專注於剪式升降設備及垂直定位。產品包括碼頭升降平台、貨物升降機、工作平台及舞台設備。',
    descriptionDe: 'Schwedische SIGI-Marke, spezialisiert auf Scherenhubtische und vertikale Positionierung. Produkte umfassen Verladelifte, Lastenaufzüge, Arbeitsbühnen und Bühnentechnik.',
    productCategories: ['dock-loading', 'lift-system'],
  },
  {
    id: 'chase',
    name: 'Chase Equipment',
    country: 'United Kingdom',
    logo: assetPath('/images/brands/chase/logo.png'),
    website: 'https://chaseequipment.co.uk',
    descriptionEn: 'UK market leader in loading bay equipment, established in 1920. Specializes in yard ramps, goods lifts, dock levellers, dock shelters and industrial doors.',
    descriptionZh: '英國碼頭裝卸設備市場領導者，創立於1920年。專業生產斜坡台、貨物升降機、月台調整板、門罩及工業門。',
    descriptionDe: 'Britischer Marktführer für Verladerampen-Ausrüstung, gegründet 1920. Spezialisiert auf Verladerampen, Lastenaufzüge, Überladebrücken, Torabdichtungen und Industrietore.',
    productCategories: ['dock-loading', 'door-system'],
  },
];
