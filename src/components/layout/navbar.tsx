'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';
import { mainNavItems } from '@/data/navigation';
import { useState } from 'react';

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src="/images/logo/optimum-logo.gif"
            alt="OPTIMUM"
            width={150}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href === '/' ? '' : item.href}`}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0099CC]"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Right side: Language switcher + Mobile menu */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetTitle className="text-[#0099CC] font-bold">OPTIMUM</SheetTitle>
              <nav className="mt-6 flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href === '/' ? '' : item.href}`}
                    className="text-base font-medium text-gray-700 transition-colors hover:text-[#0099CC]"
                    onClick={() => setOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
