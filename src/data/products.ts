import { BASE_PATH } from '@/lib/utils';

const bp = (path: string) => `${BASE_PATH}${path}`;

export interface ProductItem {
  id: string;
  nameEn: string;
  nameZh: string;
  nameDe: string;
  descriptionEn: string;
  descriptionZh: string;
  descriptionDe: string;
  images: string[];
  features?: {
    en: string[];
    zh: string[];
    de: string[];
  };
}

export interface ProductCategory {
  slug: string;
  nameEn: string;
  nameZh: string;
  nameDe: string;
  descriptionEn: string;
  descriptionZh: string;
  descriptionDe: string;
  thumbnail: string;
  items: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'dock-loading',
    nameEn: 'Dock Loading System',
    nameZh: '碼頭設備',
    nameDe: 'Verladebrücken-System',
    descriptionEn: 'Complete dock loading solutions for efficient logistics operations',
    descriptionZh: '完整的碼頭裝卸設備解決方案，提升物流作業效率',
    descriptionDe: 'Komplette Verladelösungen für effiziente Logistikabläufe',
    thumbnail: bp('/images/products/dock-loading/poweramp-lhp-leveler.png'),
    items: [
      {
        id: 'dobo-system',
        nameEn: 'DOBO System (Docking Before Opening)',
        nameZh: '冷鏈物流氣密碼頭系統',
        nameDe: 'DOBO-System (Docking Before Opening)',
        descriptionEn: 'Hörmann integrated loading system that lets the lorry dock with all doors closed. The dock shelter seals the vehicle first; the hall door and the truck doors are only opened once docking is complete — protecting the cold chain, hygiene and security throughout the entire process.',
        descriptionZh: 'Hörmann 整合式碼頭系統，貨車於門封內完成靠泊後，廠房門與貨車後門才依序開啟。先密封、後開門的設計，全程維持冷鏈、潔淨與安全，是冷凍冷藏倉、食品藥品物流的首選方案。',
        descriptionDe: 'Hörmann-Verladesystem, bei dem der LKW bei geschlossenen Toren andockt. Erst nach vollständiger Abdichtung durch das Torabdichtsystem öffnen sich Hallentor und LKW-Türen — für lückenlose Kühlkette, Hygiene und Sicherheit.',
        images: [
          bp('/images/products/dock-loading/hoermann-dobo-loading-houses.jpg'),
          bp('/images/products/dock-loading/hoermann-dobo-doors-closed.jpg'),
          bp('/images/products/dock-loading/hoermann-dobo-doors-open.jpg'),
        ],
        features: {
          en: [
            'Closed-door docking maintains the cold chain and hygienic transport',
            'Saves approx. 5 minutes per lorry — driver does not exit to open doors',
            'Anti-theft: hall door and truck doors stay locked until loading starts',
            'Integrated docking assistant, DAS 3 DOBO dock seal, HTL2 ISO dock leveller and VBV4/VBV5 movable buffers',
          ],
          zh: [
            '關門靠泊，全程維持冷鏈與潔淨運輸',
            '每車省約 5 分鐘 — 駕駛無需下車開門',
            '防竊保護：裝卸前廠房門及貨車後門保持鎖閉',
            '整合導引系統、DAS 3 DOBO 門封、HTL2 ISO 月台調整板及 VBV4／VBV5 活動緩衝器',
          ],
          de: [
            'Andocken mit geschlossenen Türen erhält die Kühlkette und hygienischen Transport',
            'Spart ca. 5 Minuten pro LKW — Fahrer muss zum Türöffnen nicht aussteigen',
            'Diebstahlschutz: Hallentor und LKW-Türen bleiben bis zum Beladen verschlossen',
            'Integration aus Einweishilfe, Torabdichtung DAS 3 DOBO, Überladebrücke HTL2 ISO und beweglichen Puffern VBV4/VBV5',
          ],
        },
      },
      {
        id: 'dock-leveler',
        nameEn: 'Dock Leveler',
        nameZh: '斜坡式月台調整板',
        nameDe: 'Überladebrücke',
        descriptionEn: 'Adjusts the height difference between the dock and the container truck platform, improving loading/unloading speed.',
        descriptionZh: '調整貨櫃月台與貨櫃車台高低差，提昇作業速度，省時省力。',
        descriptionDe: 'Gleicht den Höhenunterschied zwischen Rampe und LKW-Ladefläche aus und verbessert die Be-/Entladegeschwindigkeit.',
        images: [bp('/images/products/dock-loading/poweramp-lhp-leveler.png')],
        features: {
          en: ['Adjusts dock-to-truck height difference', 'Improves loading/unloading speed', 'Saves time and effort'],
          zh: ['調整貨櫃月台與貨櫃車台高低差', '提昇作業速度', '省時省力'],
          de: ['Gleicht Höhenunterschiede zwischen Rampe und LKW aus', 'Verbessert die Be-/Entladegeschwindigkeit', 'Spart Zeit und Aufwand'],
        },
      },
      {
        id: 'dock-shelter',
        nameEn: 'Dock Shelter',
        nameZh: '門封',
        nameDe: 'Torabdichtung',
        descriptionEn: 'Seals the gap between the truck and the building for climate control and protection.',
        descriptionZh: '銜接貨櫃車或冷凍車與廠房之間的緩衝氣密設備。',
        descriptionDe: 'Dichtet den Spalt zwischen LKW und Gebäude für Klimakontrolle und Schutz ab.',
        images: [
          bp('/images/products/dock-loading/hoermann-dock-shelter.jpg'),
          bp('/images/products/dock-loading/hoermann-front-airlock.jpg'),
        ],
        features: {
          en: ['Buffer seal between truck and building', 'Prevents cold air loss', 'Prevents insects and dust from entering'],
          zh: ['銜接貨櫃車或冷凍車與廠房之間的緩衝氣密', '防止冷氣流失', '防止蚊蟲灰塵進入廠區'],
          de: ['Pufferabdichtung zwischen LKW und Gebäude', 'Verhindert Kaltluftverlust', 'Verhindert das Eindringen von Insekten und Staub'],
        },
      },
      {
        id: 'table-lifter',
        nameEn: 'Loading Dock Table',
        nameZh: '升降平台',
        nameDe: 'Hubtisch',
        descriptionEn: 'Hydraulic loading dock table for adjusting cargo height during loading/unloading operations.',
        descriptionZh: '油壓升降平台，調整貨物高度，方便裝卸作業。',
        descriptionDe: 'Hydraulischer Hubtisch zur Höhenanpassung der Ladung beim Be-/Entladen.',
        images: [
          bp('/images/products/dock-loading/marco-loading-dock-table.jpg'),
        ],
        features: {
          en: ['Hydraulic lifting mechanism', 'Adjustable height', 'Heavy-duty capacity'],
          zh: ['油壓升降機構', '高度可調整', '重載能力'],
          de: ['Hydraulischer Hubmechanismus', 'Höhenverstellbar', 'Schwerlastkapazität'],
        },
      },
      {
        id: 'mobile-ramp',
        nameEn: 'Mobile Ramp',
        nameZh: '移動式斜坡台',
        nameDe: 'Mobile Rampe',
        descriptionEn: 'Mobile ramp for bridging the gap between dock and truck for forklift access.',
        descriptionZh: '移動式斜坡台，銜接月台與貨車間的高低差，方便堆高機進出。',
        descriptionDe: 'Mobile Rampe zur Überbrückung des Höhenunterschieds zwischen Rampe und LKW für Staplerzugang.',
        images: [
          bp('/images/products/dock-loading/copperloy-yard-ramp.jpg'),
        ],
        features: {
          en: ['Mobile and flexible', 'Forklift accessible', 'Heavy load capacity'],
          zh: ['移動靈活', '堆高機可通行', '重載能力'],
          de: ['Mobil und flexibel', 'Staplerzugang', 'Schwerlastkapazität'],
        },
      },
      {
        id: 'trailer-jack',
        nameEn: 'Trailer Safety Jack',
        nameZh: '貨櫃安全支撐架',
        nameDe: 'Anhänger-Sicherheitsstütze',
        descriptionEn: 'Adjustable screw jack that supports the front of uncoupled semi-trailers at the loading dock, preventing nose-heavy trailers from tipping and protecting against landing gear failure during loading.',
        descriptionZh: '可調式螺旋千斤頂，於碼頭裝卸時支撐與曳引車分離的半拖車前端，防止前重型拖車翻覆，避免支撐腿過載損壞。',
        descriptionDe: 'Verstellbare Schraubstütze, die im Verladebereich das vordere Ende abgekoppelter Sattelauflieger unterstützt, das Kippen frontlastiger Auflieger verhindert und vor Ausfall der Stützwinden schützt.',
        images: [
          bp('/images/products/dock-loading/trailer-safety-jack.jpg'),
        ],
        features: {
          en: ['Safe support for uncoupled trailers at the dock', 'Swivel top plate with 10° tilt for solid fifth-wheel contact', 'Mobile design with wheels for easy positioning'],
          zh: ['碼頭作業時安全支撐脫離曳引車的拖車', '可旋轉頂盤搭配 10° 傾角，與五輪盤穩固貼合', '附輪設計，移動定位輕鬆方便'],
          de: ['Sichere Stützung abgekoppelter Auflieger am Verladetor', 'Drehbare Auflagerplatte mit 10° Neigung für sicheren Kontakt zur Sattelkupplung', 'Mobile Ausführung mit Rädern für einfaches Positionieren'],
        },
      },
      {
        id: 'truck-restraint',
        nameEn: 'Truck Restraint',
        nameZh: '卡車安全掛勾器',
        nameDe: 'LKW-Feststellanlage',
        descriptionEn: 'Prevents truck slippage during dock operations.',
        descriptionZh: '防止碼頭作業時車輛滑動。',
        descriptionDe: 'Verhindert das Wegrollen des Fahrzeugs während des Verladens.',
        images: [
          bp('/images/products/dock-loading/dlm-powerstop-side.jpg'),
        ],
        features: {
          en: ['Improves operational safety', 'Prevents forklift falls', 'Compatible with various truck sizes'],
          zh: ['提升作業安全', '防止堆高機墜落', '適用各種貨車尺寸'],
          de: ['Erhöht die Arbeitssicherheit', 'Verhindert Gabelstapler-Absturz', 'Geeignet für verschiedene LKW-Größen'],
        },
      },
      {
        id: 'edge-of-dock',
        nameEn: 'Edge of Dock',
        nameZh: '簡易式橋板',
        nameDe: 'Überladeblech',
        descriptionEn: 'Edge of dock leveler for light-duty applications where a full dock leveler is not required.',
        descriptionZh: '簡易式橋板，適用於輕載作業，無需安裝完整的斜坡式月台調整板。',
        descriptionDe: 'Überladeblech für leichte Anwendungen, bei denen keine vollständige Überladebrücke erforderlich ist.',
        images: [bp('/images/products/dock-loading/dlm-nl-edge-of-dock.png')],
        features: {
          en: ['Light-duty applications', 'Cost-effective solution', 'Easy installation'],
          zh: ['適用輕載作業', '經濟實惠', '安裝簡便'],
          de: ['Für leichte Anwendungen', 'Kostengünstige Lösung', 'Einfache Installation'],
        },
      },
      {
        id: 'dock-light',
        nameEn: 'Dock Light',
        nameZh: '碼頭照明',
        nameDe: 'Rampenbeleuchtung',
        descriptionEn: 'Loading dock lights for safe nighttime operations.',
        descriptionZh: '碼頭照明設備，確保夜間作業安全。',
        descriptionDe: 'Verladerampen-Beleuchtung für sicheren Nachtbetrieb.',
        images: [bp('/images/products/dock-loading/fostoria-dkl-dock-light.jpg')],
        features: {
          en: ['Adjustable arm for flexible positioning', 'Bright illumination for nighttime loading operations', 'Durable steel housing with safety guard'],
          zh: ['可調式燈臂，照射角度靈活', '高亮度光源，確保夜間裝卸作業安全', '鋼製外殼搭配防護網，堅固耐用'],
          de: ['Verstellbarer Arm für flexible Ausrichtung', 'Helle Ausleuchtung für nächtliche Verladevorgänge', 'Robustes Stahlgehäuse mit Schutzgitter'],
        },
      },
    ],
  },
  {
    slug: 'door-system',
    nameEn: 'Door System',
    nameZh: '廠辦用門',
    nameDe: 'Torsysteme',
    descriptionEn: 'Professional door systems for industrial and commercial applications',
    descriptionZh: '適用於工業及商業環境的專業門禁系統',
    descriptionDe: 'Professionelle Torsysteme für industrielle und gewerbliche Anwendungen',
    thumbnail: bp('/images/products/door-system/hoermann-sectional-door.jpg'),
    items: [
      {
        id: 'overhead-sectional',
        nameEn: 'Overhead Sectional Door',
        nameZh: '組合式彩色鋼板門',
        nameDe: 'Sektionaltor',
        descriptionEn: 'Overhead sectional doors with insulated panels for industrial buildings.',
        descriptionZh: '組合式彩色鋼板門，具隔熱保溫效果，適用於工業廠房。',
        descriptionDe: 'Sektionaltore mit isolierten Paneelen für Industriegebäude.',
        images: [
          bp('/images/products/door-system/hoermann-sectional-door.jpg'),
        ],
        features: {
          en: ['Insulated panels', 'Various sizes available', 'Electric or manual operation'],
          zh: ['隔熱保溫面板', '多種尺寸可選', '電動或手動操作'],
          de: ['Isolierte Paneele', 'Verschiedene Größen verfügbar', 'Elektrischer oder manueller Betrieb'],
        },
      },
      {
        id: 'swing-door',
        nameEn: 'Swing Door',
        nameZh: '迴轉門',
        nameDe: 'Pendeltür',
        descriptionEn: 'Swing doors for clean room and food processing environments.',
        descriptionZh: '適用於無塵室及食品加工環境的迴轉門。',
        descriptionDe: 'Pendeltüren für Reinraum- und Lebensmittelverarbeitungsumgebungen.',
        images: [bp('/images/products/door-system/hoermann-folding-door.jpg')],
        features: {
          en: ['Clean room compatible', 'Easy passage', 'Hygienic design'],
          zh: ['適用無塵室', '通行便利', '衛生設計'],
          de: ['Reinraumgeeignet', 'Einfacher Durchgang', 'Hygienisches Design'],
        },
      },
      {
        id: 'strip-curtain',
        nameEn: 'Strip Curtain',
        nameZh: 'PVC門簾',
        nameDe: 'Streifenvorhang',
        descriptionEn: 'PVC strip curtains for temperature zone separation.',
        descriptionZh: 'PVC門簾，用於溫區隔離。',
        descriptionDe: 'PVC-Streifenvorhänge zur Temperaturzonentrennung.',
        images: [bp('/images/products/door-system/hoermann-strip-curtain.jpg')],
        features: {
          en: ['Temperature zone separation', 'Easy passage', 'Cost effective'],
          zh: ['溫區隔離', '通行方便', '經濟實惠'],
          de: ['Temperaturzonentrennung', 'Einfacher Durchgang', 'Kostengünstig'],
        },
      },
      {
        id: 'folding-door',
        nameEn: 'Folding Door',
        nameZh: '摺疊門',
        nameDe: 'Falttür',
        descriptionEn: 'Space-saving folding doors for wide openings.',
        descriptionZh: '節省空間的摺疊門，適用於大開口區域。',
        descriptionDe: 'Platzsparende Falttüren für breite Öffnungen.',
        images: [bp('/images/products/door-system/hoermann-folding-door.jpg')],
        features: {
          en: ['Space-saving design', 'Wide opening capability', 'Durable construction'],
          zh: ['節省空間設計', '大開口能力', '堅固耐用'],
          de: ['Platzsparendes Design', 'Breite Öffnungsmöglichkeit', 'Robuste Konstruktion'],
        },
      },
      {
        id: 'entrance-gate',
        nameEn: 'Entrance Gate Operator',
        nameZh: '大門自動門機',
        nameDe: 'Torautomatik',
        descriptionEn: 'Automatic gate operators for residential and commercial entrances.',
        descriptionZh: '適用於住宅及商業入口的自動門機。',
        descriptionDe: 'Automatische Torantriebe für Wohn- und Gewerbeingänge.',
        images: [bp('/images/products/door-system/hoermann-entrance-gate.jpg')],
        features: {
          en: ['Automatic gate operation', 'Security integration', 'Weather resistant'],
          zh: ['自動開門', '安全整合', '耐候設計'],
          de: ['Automatischer Torbetrieb', 'Sicherheitsintegration', 'Witterungsbeständig'],
        },
      },
      {
        id: 'office-door',
        nameEn: 'Office Door',
        nameZh: '辦公室門',
        nameDe: 'Bürotür',
        descriptionEn: 'Professional office doors for commercial buildings.',
        descriptionZh: '適用於商業大樓的專業辦公室門。',
        descriptionDe: 'Professionelle Bürotüren für Geschäftsgebäude.',
        images: [
          bp('/images/products/door-system/hoermann-office-door.jpg'),
        ],
        features: {
          en: ['Sleek professional appearance', 'Sound and thermal insulation', 'Various finishes and configurations'],
          zh: ['俐落專業外觀', '隔音及隔熱效果', '多種樣式及規格可選'],
          de: ['Schlichtes professionelles Erscheinungsbild', 'Schall- und Wärmedämmung', 'Verschiedene Ausführungen verfügbar'],
        },
      },
    ],
  },
  {
    slug: 'warehousing',
    nameEn: 'Warehousing System',
    nameZh: '廠辦週邊',
    nameDe: 'Lagertechnik',
    descriptionEn: 'Warehousing accessories and protection systems',
    descriptionZh: '倉儲週邊配件及保護系統',
    descriptionDe: 'Lagerzubehör und Schutzsysteme',
    thumbnail: bp('/images/products/warehousing/71-pwl-bumper-d6.jpg'),
    items: [
      {
        id: 'bumper',
        nameEn: 'Dock Bumper',
        nameZh: '碼頭防撞器',
        nameDe: 'Rampenpuffer',
        descriptionEn: 'Heavy-duty dock bumpers for building protection.',
        descriptionZh: '重型碼頭防撞器，保護建築結構。',
        descriptionDe: 'Schwerlast-Rampenpuffer zum Gebäudeschutz.',
        images: [bp('/images/products/warehousing/71-pwl-bumper-d6.jpg')],
        features: {
          en: ['Heavy-duty rubber or laminated construction', 'Absorbs impact energy from docking trucks', 'Protects building structure and dock equipment'],
          zh: ['重型橡膠或積層結構', '吸收貨車進站時的撞擊能量', '保護建築結構及碼頭設備'],
          de: ['Schwere Gummi- oder Verbundausführung', 'Absorbiert Aufprallenergie beim Andocken', 'Schützt Gebäudestruktur und Verladetechnik'],
        },
      },
      {
        id: 'corner-guard',
        nameEn: 'Corner Guard',
        nameZh: '護角',
        nameDe: 'Eckschutz',
        descriptionEn: 'Corner protection guards for building columns and corners.',
        descriptionZh: '建築柱角及轉角保護器。',
        descriptionDe: 'Eckschutzprofile für Gebäudesäulen und Ecken.',
        images: [bp('/images/products/warehousing/71-pwl-corner-guard.jpg')],
        features: {
          en: ['Protects columns and corners from forklift impact', 'High-visibility safety colors', 'Easy bolt-on or surface-mount installation'],
          zh: ['保護柱角及轉角，避免堆高機撞擊', '高辨識度警示配色', '可鎖固或表面安裝，施工簡便'],
          de: ['Schützt Säulen und Ecken vor Staplerstößen', 'Hochsichtbare Warnfarben', 'Einfache Schraub- oder Aufputzmontage'],
        },
      },
      {
        id: 'parking-block',
        nameEn: 'Parking Block',
        nameZh: '停車墩',
        nameDe: 'Parkplatzsperre',
        descriptionEn: 'Rubber parking blocks for vehicle positioning.',
        descriptionZh: '橡膠停車墩，用於車輛定位。',
        descriptionDe: 'Gummi-Parkplatzsperren zur Fahrzeugpositionierung.',
        images: [bp('/images/products/warehousing/72-pwl-parking-blocks.jpg')],
        features: {
          en: ['Heavy-duty rubber construction', 'Reflective markings for visibility', 'Easy installation with anchor bolts'],
          zh: ['重型橡膠材質', '反光標示，提升辨識度', '錨栓固定，安裝簡便'],
          de: ['Schwere Gummiausführung', 'Reflektierende Markierungen für Sichtbarkeit', 'Einfache Montage mit Ankerbolzen'],
        },
      },
      {
        id: 'entrance-matting',
        nameEn: 'Entrance Matting System',
        nameZh: '刮泥墊',
        nameDe: 'Schmutzfangmatten-System',
        descriptionEn: 'Entrance matting system for removing dirt and moisture from foot traffic at building entryways.',
        descriptionZh: '入口刮泥墊系統，清除進出人員鞋底的泥沙與水分。',
        descriptionDe: 'Schmutzfangmatten-System zur Entfernung von Schmutz und Feuchtigkeit im Eingangsbereich.',
        images: [
          bp('/images/products/warehousing/entrance-matting.png'),
        ],
        features: {
          en: ['Removes dirt and moisture from foot traffic', 'Aluminum frame with replaceable inserts', 'Custom sizing for any entryway'],
          zh: ['清除進出人員鞋底的泥沙與水分', '鋁製框架搭配可更換墊塊', '依入口尺寸客製化'],
          de: ['Entfernt Schmutz und Feuchtigkeit von Schuhen', 'Aluminiumrahmen mit austauschbaren Einlagen', 'Maßanfertigung für jeden Eingang'],
        },
      },
      {
        id: 'security-bollards',
        nameEn: 'High Security Bollards',
        nameZh: '伸縮式交通管制桿',
        nameDe: 'Versenkbare Hochsicherheitspoller',
        descriptionEn: 'Retractable stainless-steel bollards that sit flush in the ground when lowered and rise on demand to control vehicle access and harden site security.',
        descriptionZh: '伸縮式不鏽鋼交通管制桿，平時隱藏於地面，依需要升起控制車輛進出，阻擋未經授權車輛闖入，提升周界安全。',
        descriptionDe: 'Versenkbare Edelstahlpoller, die im Ruhezustand bündig im Boden liegen und bei Bedarf ausfahren, um die Zufahrt zu steuern und die Standortsicherheit zu erhöhen.',
        images: [
          bp('/images/products/warehousing/security-bollards-driveway.png'),
          bp('/images/products/warehousing/security-bollards-street.png'),
        ],
        features: {
          en: ['Electric or hydraulic retractable operation', 'Stainless steel construction with high impact resistance', 'Suited to residential driveways, commercial entrances and high-security perimeters'],
          zh: ['電動／液壓伸縮升降', '不鏽鋼材質，高抗撞擊強度', '適用住宅車道、商業入口及高安全性周界'],
          de: ['Elektrisch oder hydraulisch versenkbar', 'Edelstahlausführung mit hoher Aufprallfestigkeit', 'Geeignet für Wohngrundstücke, gewerbliche Eingänge und Hochsicherheitsbereiche'],
        },
      },
    ],
  },
  {
    slug: 'special-door',
    nameEn: 'Special Door',
    nameZh: '特殊用門',
    nameDe: 'Spezialtüren',
    descriptionEn: 'Specialized door solutions for demanding environments',
    descriptionZh: '適用於特殊環境需求的專業門禁解決方案',
    descriptionDe: 'Spezialisierte Türlösungen für anspruchsvolle Umgebungen',
    thumbnail: bp('/images/products/special-door/hoermann-speed-door.jpg'),
    items: [
      {
        id: 'speed-door',
        nameEn: 'Speed Door',
        nameZh: '快速捲門',
        nameDe: 'Schnelllauftor',
        descriptionEn: 'High-speed roll-up doors for areas requiring fast opening and closing.',
        descriptionZh: '高速捲門，適用於需要快速開關的區域。',
        descriptionDe: 'Schnelllauftore für Bereiche, die schnelles Öffnen und Schließen erfordern.',
        images: [bp('/images/products/special-door/hoermann-speed-door.jpg')],
        features: {
          en: ['High-speed operation', 'Energy efficient', 'Automatic sensors'],
          zh: ['高速開關', '節能效果', '自動感應'],
          de: ['Hochgeschwindigkeitsbetrieb', 'Energieeffizient', 'Automatische Sensoren'],
        },
      },
      {
        id: 'fire-door',
        nameEn: 'Fire Door',
        nameZh: '防火門',
        nameDe: 'Brandschutztür',
        descriptionEn: 'Fire-rated doors for fire compartmentalization and safety.',
        descriptionZh: '防火門，用於防火分區隔離及安全防護。',
        descriptionDe: 'Brandschutztüren für Brandabschottung und Sicherheit.',
        images: [bp('/images/products/special-door/hoermann-fire-sliding-door.jpg')],
        features: {
          en: ['Fire-rated protection', 'Automatic closing', 'Safety certified'],
          zh: ['防火等級認證', '自動關閉', '安全認證'],
          de: ['Brandschutzklassifiziert', 'Automatisches Schließen', 'Sicherheitszertifiziert'],
        },
      },
      {
        id: 'cold-storage-door',
        nameEn: 'Cold-Storage Door',
        nameZh: '冷凍庫門',
        nameDe: 'Kühlhaustür',
        descriptionEn: 'Insulated doors for cold storage and refrigeration facilities.',
        descriptionZh: '隔熱保溫門，適用於冷凍庫及冷藏設施。',
        descriptionDe: 'Isolierte Türen für Kühlhäuser und Kühlanlagen.',
        images: [
          bp('/images/products/special-door/hoermann-fire-curtain.jpg'),
        ],
        features: {
          en: ['Heavy insulation', 'Airtight seal', 'Temperature rated'],
          zh: ['高度隔熱', '氣密封條', '耐溫等級'],
          de: ['Starke Isolierung', 'Luftdichte Abdichtung', 'Temperaturbemessen'],
        },
      },
      {
        id: 'anti-explosion-door',
        nameEn: 'Anti-Explosion Door',
        nameZh: '防爆門',
        nameDe: 'Explosionsschutztür',
        descriptionEn: 'Anti-explosion doors for hazardous environments.',
        descriptionZh: '防爆門，適用於危險環境。',
        descriptionDe: 'Explosionsschutztüren für Gefahrenbereiche.',
        images: [bp('/images/products/special-door/hoermann-rolling-shutter.jpg')],
        features: {
          en: ['Explosion resistant', 'Safety certified', 'Heavy-duty construction'],
          zh: ['耐爆設計', '安全認證', '重型結構'],
          de: ['Explosionsbeständig', 'Sicherheitszertifiziert', 'Schwerlastkonstruktion'],
        },
      },
    ],
  },
  {
    slug: 'garage-door',
    nameEn: 'Garage Door',
    nameZh: '居家用門',
    nameDe: 'Garagentor',
    descriptionEn: 'Residential garage doors and entrance gate operators',
    descriptionZh: '居家車庫門及大門自動門系統',
    descriptionDe: 'Garagentore und Torautomatik für den Wohnbereich',
    thumbnail: bp('/images/products/garage-door/hoermann-garage-sectional.jpg'),
    items: [
      {
        id: 'villa-door',
        nameEn: 'Villa Door',
        nameZh: '別墅門',
        nameDe: 'Villentür',
        descriptionEn: 'Elegant villa doors with automatic operators for convenience and security.',
        descriptionZh: '優雅別墅門搭配自動開門機，方便又安全。',
        descriptionDe: 'Elegante Villentüren mit automatischem Antrieb für Komfort und Sicherheit.',
        images: [
          bp('/images/products/garage-door/hoermann-garage-sectional.jpg'),
          bp('/images/products/garage-door/hoermann-garage-swing.jpg'),
        ],
        features: {
          en: ['Automatic operation', 'Remote control', 'Elegant design'],
          zh: ['自動操作', '遙控開關', '優雅設計'],
          de: ['Automatischer Betrieb', 'Fernbedienung', 'Elegantes Design'],
        },
      },
      {
        id: 'garage-door',
        nameEn: 'Garage Door',
        nameZh: '車庫門',
        nameDe: 'Garagentor',
        descriptionEn: 'Residential garage doors with automatic operators.',
        descriptionZh: '居家車庫門搭配自動開門機。',
        descriptionDe: 'Garagentore für den Wohnbereich mit automatischem Antrieb.',
        images: [
          bp('/images/products/garage-door/hoermann-garage-door-1.jpg'),
          bp('/images/products/garage-door/hoermann-side-sectional.jpg'),
        ],
        features: {
          en: ['Automatic operation', 'Safety sensors', 'Various materials'],
          zh: ['自動操作', '安全感應', '多種材質'],
          de: ['Automatischer Betrieb', 'Sicherheitssensoren', 'Verschiedene Materialien'],
        },
      },
    ],
  },
  {
    slug: 'pharmacy-system',
    nameEn: 'Pharmacy Material Handling',
    nameZh: '藥廠設備',
    nameDe: 'Pharmazeutische Fördertechnik',
    descriptionEn: 'Pharmaceutical material handling and processing equipment',
    descriptionZh: '製藥物料搬運及加工設備系統',
    descriptionDe: 'Pharmazeutische Materialhandhabungs- und Verarbeitungsanlagen',
    thumbnail: bp('/images/products/pharmacy-system/diosna-csm_diosna-mischen-granulieren-p1-6-teaser_600x700px_95b20d50f2.jpg'),
    items: [
      {
        id: 'fluid-bed',
        nameEn: 'Fluid Bed System',
        nameZh: '流動床系統',
        nameDe: 'Wirbelschichtsystem',
        descriptionEn: 'Diosna fluid bed systems for pharmaceutical granulating and drying.',
        descriptionZh: 'Diosna流動床系統，用於製藥造粒及乾燥。',
        descriptionDe: 'Diosna-Wirbelschichtsysteme für pharmazeutische Granulation und Trocknung.',
        images: [
          bp('/images/products/pharmacy-system/diosna-csm_diosna-wirbelschicht-prozessoren-minilab-teaser_600x700px_75330f0cb1.jpg'),
          bp('/images/products/pharmacy-system/diosna-csm_diosna-mischen-granulieren-trocknen-system-cgs_800-stahlfilterpatronen-800x500_f4181d4cb2.jpg'),
          bp('/images/products/pharmacy-system/diosna-csm_diosna-granulieren-trocknen-minilab_rc-hmi-05-800x500_985eb2d062.jpg'),
        ],
        features: {
          en: ['Precise granulation', 'High throughput', 'GMP compliant'],
          zh: ['精確造粒', '高產量', '符合GMP規範'],
          de: ['Präzise Granulation', 'Hoher Durchsatz', 'GMP-konform'],
        },
      },
      {
        id: 'coater',
        nameEn: 'Film Coating System',
        nameZh: '膜衣包覆系統',
        nameDe: 'Filmbeschichtungssystem',
        descriptionEn: 'Diosna coating systems for pharmaceutical tablets.',
        descriptionZh: 'Diosna膜衣包覆系統，用於錠劑包衣。',
        descriptionDe: 'Diosna-Beschichtungssysteme für pharmazeutische Tabletten.',
        images: [
          bp('/images/products/pharmacy-system/diosna-csm_diosna-coater-midilab-teaser_600x700px_3f1a132e0d.jpg'),
          bp('/images/products/pharmacy-system/diosna-csm_diosna_pharma_solids_teaser_coater_3_800x500px_de371489aa.jpg'),
        ],
        features: {
          en: ['Uniform coating', 'Automated process', 'GMP compliant'],
          zh: ['均勻包衣', '自動化製程', '符合GMP規範'],
          de: ['Gleichmäßige Beschichtung', 'Automatisierter Prozess', 'GMP-konform'],
        },
      },
      {
        id: 'mixer-granulator',
        nameEn: 'Mixer Granulator',
        nameZh: '混合造粒機',
        nameDe: 'Mischgranulator',
        descriptionEn: 'Diosna mixer granulators for pharmaceutical powder processing.',
        descriptionZh: 'Diosna混合造粒機，用於製藥粉體加工。',
        descriptionDe: 'Diosna-Mischgranulatoren für pharmazeutische Pulververarbeitung.',
        images: [
          bp('/images/products/pharmacy-system/diosna-csm_diosna-mischen-granulieren-p1-6-teaser_600x700px_95b20d50f2.jpg'),
          bp('/images/products/pharmacy-system/diosna-csm_diosna_pharma_solids_teaser_high-shear_mischer-granulatoren_1_800x500px_7ba73be49d.jpg'),
          bp('/images/products/pharmacy-system/diosna-csm_diosna-mischen-granulieren-p_300_-_1250-01-800x500_6b1df81095.jpg'),
        ],
        features: {
          en: ['Uniform mixing', 'Various capacities', 'GMP compliant'],
          zh: ['均勻混合', '多種容量', '符合GMP規範'],
          de: ['Gleichmäßiges Mischen', 'Verschiedene Kapazitäten', 'GMP-konform'],
        },
      },
      {
        id: 'pharma-drum',
        nameEn: 'Pharmaceutical Drums',
        nameZh: '製藥容器',
        nameDe: 'Pharmazeutische Behälter',
        descriptionEn: 'Muller stainless steel pharmaceutical drums for material storage and transport.',
        descriptionZh: 'Muller不鏽鋼製藥容器，用於物料儲存及運輸。',
        descriptionDe: 'Muller-Edelstahl-Pharmabehälter für Materiallagerung und -transport.',
        images: [
          bp('/images/products/pharmacy-system/6-10-muller-drum.jpg'),
          bp('/images/products/pharmacy-system/6-11-muller-drum.jpg'),
          bp('/images/products/pharmacy-system/6-12-muller-drum.jpg'),
        ],
        features: {
          en: ['Stainless steel construction', 'GMP compliant', 'Easy cleaning'],
          zh: ['不鏽鋼材質', '符合GMP規範', '易於清潔'],
          de: ['Edelstahlkonstruktion', 'GMP-konform', 'Einfache Reinigung'],
        },
      },
      {
        id: 'cleaning-system',
        nameEn: 'Cleaning System',
        nameZh: '清洗系統',
        nameDe: 'Reinigungssystem',
        descriptionEn: 'Hamo automatic cleaning systems for pharmaceutical equipment.',
        descriptionZh: 'Hamo自動清洗系統，用於製藥設備清洗。',
        descriptionDe: 'Hamo-Reinigungssysteme für pharmazeutische Anlagen.',
        images: [
          bp('/images/products/pharmacy-system/67-hamo-auto-system.jpg'),
          bp('/images/products/pharmacy-system/68-hamo-basket.jpg'),
          bp('/images/products/pharmacy-system/69-hamo-drum.jpg'),
        ],
        features: {
          en: ['Automatic operation', 'Thorough cleaning', 'GMP validated'],
          zh: ['自動操作', '徹底清洗', 'GMP驗證'],
          de: ['Automatischer Betrieb', 'Gründliche Reinigung', 'GMP-validiert'],
        },
      },
      {
        id: 'schneider',
        nameEn: 'Schneider Equipment',
        nameZh: 'Schneider設備',
        nameDe: 'Schneider-Ausrüstung',
        descriptionEn: 'Schneider pharmaceutical processing equipment.',
        descriptionZh: 'Schneider製藥加工設備。',
        descriptionDe: 'Schneider pharmazeutische Verarbeitungsanlagen.',
        images: [bp('/images/products/pharmacy-system/6-11-schneider.jpg')],
        features: {
          en: ['Pharmaceutical-grade construction', 'Reliable processing performance', 'GMP compliant design'],
          zh: ['符合製藥規格設計', '穩定可靠的加工性能', '符合GMP規範'],
          de: ['Pharmazeutische Konstruktionsqualität', 'Zuverlässige Verarbeitungsleistung', 'GMP-konformes Design'],
        },
      },
    ],
  },
  {
    slug: 'vacuum-lift',
    nameEn: 'Vacuum Lift System',
    nameZh: '真空運搬',
    nameDe: 'Vakuum-Hebetechnik',
    descriptionEn: 'MANUT-LM vacuum tube lifters from France — ergonomic and efficient material handling solutions for boxes, sacks, drums, panels and pallets',
    descriptionZh: '法國 MANUT-LM 真空管式搬運系統 — 符合人體工學、高效率的物料搬運解決方案，適用於紙箱、袋裝、桶槽、板材及棧板',
    descriptionDe: 'MANUT-LM Vakuum-Schlauchheber aus Frankreich — ergonomische und effiziente Materialhandhabungslösungen für Kartons, Säcke, Fässer, Platten und Paletten',
    thumbnail: bp('/images/products/vacuum-lift/manut-Master-Plus-Wood-Panels.jpg'),
    items: [
      {
        id: 'manut-vacuum',
        nameEn: 'MANUT-LM Vacuum Tube Lifters',
        nameZh: 'MANUT-LM 真空管式搬運系統',
        nameDe: 'MANUT-LM Vakuum-Schlauchheber',
        descriptionEn: 'MANUT-LM lifting tube manipulators from France (Piab Group). Master Fast and Master Plus series for handling boxes, sacks, drums, panels, pallets and various industrial loads with ergonomic vacuum tube technology.',
        descriptionZh: '法國 MANUT-LM（Piab 集團）真空管式搬運系統。Master Fast 及 Master Plus 系列，適用於搬運紙箱、袋裝物、桶槽、板材、棧板及各種工業物料，採用符合人體工學的真空管技術。',
        descriptionDe: 'MANUT-LM Schlauchheber-Manipulatoren aus Frankreich (Piab Group). Master Fast und Master Plus Serien für die Handhabung von Kartons, Säcken, Fässern, Platten, Paletten und verschiedenen Industrielasten mit ergonomischer Vakuumrohr-Technologie.',
        images: [
          bp('/images/products/vacuum-lift/manut-Master-Plus-Wood-Panels.jpg'),
          bp('/images/products/vacuum-lift/manut-masterfast_sac-manut-lm.jpg'),
          bp('/images/products/vacuum-lift/manut-masterfast_tonneau-manut-lm.jpg'),
          bp('/images/products/vacuum-lift/manut-masterplus_manutention_plusieurs_cartons_hauteur-manut-lm.jpg'),
          bp('/images/products/vacuum-lift/manut-masterplus_manutention_portes-manut-lm.jpg'),
          bp('/images/products/vacuum-lift/manut-masterplus_manutention_panneaux_solaires-manut-lm.jpg'),
        ],
        features: {
          en: ['Ergonomic vacuum tube lifting', 'Master Fast & Master Plus series', 'Handles boxes, sacks, drums, panels', 'Jib crane and overhead crane options'],
          zh: ['符合人體工學真空管吊具', 'Master Fast 及 Master Plus 系列', '適用紙箱、袋裝、桶槽、板材', '可搭配旋臂吊車及天車'],
          de: ['Ergonomisches Vakuumrohr-Heben', 'Master Fast & Master Plus Serien', 'Für Kartons, Säcke, Fässer, Platten', 'Schwenkkran- und Brückenkran-Optionen'],
        },
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productCategories.map((p) => p.slug);
}
