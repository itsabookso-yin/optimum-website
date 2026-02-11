import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "陽榮自動化設備有限公司 | 歐美先進物流設備・廠房門・車庫門・藥廠設備",
  description:
    "陽榮自動化設備創立於1991年，專營歐美先進物流軟硬體設備進口代理，提供自動倉儲系統、各式廠房門、歐式車庫門、藥廠物流設備等一站式解決方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
