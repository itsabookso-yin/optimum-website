const products = [
  {
    category: "自動倉儲系統",
    desc: "引進歐美先進自動倉儲系統（V.C.S），結合物流省力化機械設備，為工廠與物流中心打造高效率的倉儲管理方案。",
    highlights: ["自動倉儲系統（V.C.S）", "物流省力化機械設備", "物流配送設備", "氣送系統"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    category: "各式廠房門 / 車庫門",
    desc: "代理歐美知名品牌各式廠房門與歐式滑升車庫門，適用於工廠、倉儲及住宅等場景，兼顧安全性與耐用性。",
    highlights: ["高速門 / 快速捲門", "防火門 / 防爆門", "氣密門 / 捲門", "歐式滑升車庫門"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    category: "藥廠物流及製程設備",
    desc: "提供符合藥廠規範的專業設備，包含軟膏及粉體儲存與輸送系統，以及各式藥廠物流與製程設備。",
    highlights: ["軟膏儲存 / 輸送系統", "粉體儲存 / 輸送系統", "藥廠物流設備", "藥廠製程設備"],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    category: "廠房週邊設備",
    desc: "完整的廠房週邊配套設備，從物料儲放到碼頭作業，提供全方位的廠房設施解決方案。",
    highlights: ["各型物料倉儲架", "碼頭燈", "刮泥板 / 柱角", "車輪檔 / 防撞桿"],
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
            代理歐美知名品牌，提供從自動倉儲到廠房設備的完整解決方案
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.category}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 text-primary transition-colors group-hover:from-primary/10 group-hover:to-primary/20">
                {p.icon}
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {p.category}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
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
