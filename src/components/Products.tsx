const products = [
  {
    category: "碼頭區周邊設備",
    desc: "提供碼頭裝卸貨作業所需的完整周邊設備，確保貨物進出的安全與效率。",
    highlights: ["裝卸貨櫃專用月台調整板", "門封 / 防撞橡皮", "升降平台 / 斜坡台", "卡車升降尾門 / 簡易式橋板"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8M8 17v-4m8 4v-4m-8 0h8m-8 0V9m8 4V9M4 21h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    category: "一般廠辦工業用門",
    desc: "各式工業用門滿足廠區生產動線、人員通行及辦公空間的多元需求。",
    highlights: ["工業用滑升門", "交通門 / 摺疊門", "PVC垂簾", "廠區大門 / 辦公室用門"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    category: "特殊需求工業用門",
    desc: "針對特殊環境需求提供專業工業用門，兼顧防火、防爆、隔溫等功能。",
    highlights: ["工業用快速門", "防火門", "冷凍庫門", "抗炸門"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    category: "居家用門及車庫門",
    desc: "歐式設計居家門與車庫門，結合美觀與便利的自動化驅動系統。",
    highlights: ["別墅居家門", "滑升式車庫門", "別墅大門驅動器"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    category: "真空運搬設備",
    desc: "依各廠實際作業環境所需，提供最適用之真空運搬機種。",
    highlights: ["依實際環境客製化", "多機種選擇"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    category: "升降設備",
    desc: "提供各類高空作業與物料升降解決方案，滿足不同場域的垂直運搬需求。",
    highlights: ["高空作業台", "簡易式高空舉物機", "升降平台"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18" />
      </svg>
    ),
  },
  {
    category: "藥廠物流設備",
    desc: "藥廠專用物流與製程設備，從原料輸送到成品包裝的完整解決方案。",
    highlights: ["不銹鋼運送容器 / 流量控制閥", "攪拌器 / 造粒機 / 流動床", "乾燥機 / 膜衣機", "軟膏及粉體儲存與輸送系統"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    category: "廠房週邊設備",
    desc: "完整的廠房週邊配套設備，提升作業環境安全與效率。",
    highlights: ["各型物料倉儲架", "碼頭燈", "刮泥板 / 柱角防撞", "車輪檔 / 防撞桿"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">產品與服務</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            代理歐美知名品牌，提供從碼頭設備、工業用門到藥廠物流的完整解決方案
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.category}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 text-primary transition-colors group-hover:from-primary/10 group-hover:to-primary/20">
                {p.icon}
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {p.category}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  {p.desc}
                </p>
                <ul className="space-y-1.5">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
