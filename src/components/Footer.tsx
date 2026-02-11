export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-1 text-lg font-bold text-white">陽榮自動化設備</h3>
            <p className="mb-3 text-xs tracking-wider text-gray-500">
              OPTIMUM AUTOMATED EQUIPMENT CORP.
            </p>
            <p className="text-sm leading-relaxed">
              創立於1991年，專營歐美先進物流軟硬體設備進口代理，致力提昇國內產業物流管理至國際水平。
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">產品類別</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  自動倉儲系統
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  各式廠房門 / 車庫門
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  藥廠物流及製程設備
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-white">
                  廠房週邊設備
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">聯絡方式</h4>
            <ul className="space-y-2 text-sm">
              <li>臺北市北投區文林北路 214 號 8 樓</li>
              <li>Tel: +886-2-2827-5785</li>
              <li>Fax: +886-2-2822-2164</li>
              <li>optimum@ms13.hinet.net</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} 陽榮自動化設備有限公司. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
