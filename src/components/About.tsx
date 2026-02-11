const values = [
  {
    title: "求真",
    desc: "以誠信為本，提供真實可靠的歐美原廠設備，確保每一項產品的品質與效能。",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "求善",
    desc: "遍訪歐美先進國家，與原廠建立同步系統，持續引進最先進的物流軟硬體設備。",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "求美",
    desc: "從設計規劃到安裝調試，追求完善的解決方案與優質的售後服務體驗。",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">關於陽榮</h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-600">
            陽榮自動化設備有限公司創立於西元1991年，時值國內產業界正由傳統物流管理方式積極尋求轉型之際，
            為因應國際跨國企業強烈競爭的需求，本公司基於協助國內產業能在物流管理的軟、硬體設備上得以提昇至國際水平，
            特地遍訪歐美各先進國家，並與國外原廠建立同步系統，隨時提供最先進的物流軟、硬體設備予國內產業界，
            以期能在政府號召建立台灣為亞洲營運中心之巨擘中，盡一己之力，共襄盛舉，以儘速提昇國家競爭力。
          </p>
        </div>

        <div className="mb-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">經營理念</h3>
          <p className="text-sm italic text-gray-500">
            &ldquo;求真、求善、求美&rdquo; — Doing Everything OPTIMUM; OPTIMUM to Everything.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {v.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{v.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
