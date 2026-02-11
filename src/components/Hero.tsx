export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-gradient-to-br from-primary to-primary-light">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
          Since 1991 — 歐美先進設備專業代理
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          提昇物流管理
          <br />
          至國際水平
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100 md:mx-0">
          陽榮自動化設備遍訪歐美先進國家，與國外原廠建立同步系統，
          隨時提供最先進的物流軟、硬體設備予國內產業界，協助提昇國家競爭力。
        </p>
        <p className="mt-4 text-sm italic text-blue-200">
          &ldquo;Doing Everything OPTIMUM; OPTIMUM to Everything.&rdquo;
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#products"
            className="rounded-lg bg-accent px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-orange-500"
          >
            瀏覽產品
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-white/10"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </section>
  );
}
