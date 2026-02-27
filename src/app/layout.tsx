import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OPTIMUM Automated Equipment Corp.',
  description: 'Professional warehousing & material handling equipment since 1991',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
