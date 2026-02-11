const serviceAreas = [
  { name: "北區服務", icon: "N" },
  { name: "中區服務", icon: "C" },
  { name: "南區服務", icon: "S" },
  { name: "大陸地區", icon: "CN" },
];

export default function Service() {
  return (
    <section id="service" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">售後服務</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            完善的售後服務網，讓您的設備運作無後顧之憂
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Service content */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              服務內容
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">定期保養</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">緊急叫修到廠服務</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">配合原廠規定之零件庫存</span>
              </li>
            </ul>
            <div className="mt-8 rounded-lg bg-primary/5 p-4">
              <p className="text-sm font-medium text-gray-700">
                售後服務統一調度專線
              </p>
              <p className="mt-1 text-xl font-bold text-primary">
                (02) 2823-2461
              </p>
            </div>
          </div>

          {/* Service areas */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              服務據點
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex flex-col items-center rounded-lg border border-gray-100 p-6 transition-colors hover:border-primary/20 hover:bg-primary/5"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {area.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
