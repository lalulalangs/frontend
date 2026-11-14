"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage, type Locale } from "@/components/LanguageProvider";

interface NavItem {
  href: string;
  label: Record<Locale, string>;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: { id: "Beranda", en: "Home" } },
  { href: "/mobil", label: { id: "Daftar Mobil", en: "Car List" } },
  { href: "/tentang-kami", label: { id: "Tentang Kami", en: "About Us" } },
];

const SCROLL_THRESHOLD_PX = 16;

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 font-sans transition-all duration-200 ${
        isSticky ? "px-0 pt-0" : "px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      }`}
    >
      <nav
        aria-label={locale === "id" ? "Navigasi utama" : "Main navigation"}
        className={`mx-auto backdrop-blur-md transition-all duration-200 ${
          isSticky
            ? "w-full max-w-none rounded-none bg-white/95 border-b border-[var(--border)] px-4 sm:px-6 lg:px-8 py-3"
            : "max-w-[1024px] rounded-full bg-white/80 border border-[var(--border)] px-4 sm:px-6 py-3"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-4 ${
            isSticky ? "max-w-[1024px] mx-auto" : "w-full"
          }`}
        >
          {/* Left: Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="shrink-0 flex items-center rounded-full px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            <Image
              src="/logo.png"
              alt="pesanmobil.com"
              width={160}
              height={33}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 rounded ${
                      active
                        ? "text-[var(--brand-link)] font-semibold"
                        : "text-[var(--fg)] hover:text-[var(--brand-link)]"
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Language Switcher (ID / EN) + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={locale === "id" ? "Pilih bahasa" : "Select language"}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1"
            >
              {(["id", "en"] as const).map((lang) => {
                const selected = locale === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLocale(lang)}
                    aria-pressed={selected}
                    className={`min-w-[36px] min-h-[32px] px-3 py-1 rounded-full text-[13px] font-semibold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] ${
                      selected
                        ? "bg-[var(--brand-link)] text-white"
                        : "text-[var(--fg)] hover:text-[var(--brand-link)]"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen
                  ? locale === "id"
                    ? "Tutup menu navigasi"
                    : "Close navigation menu"
                  : locale === "id"
                    ? "Buka menu navigasi"
                    : "Open navigation menu"
              }
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-white text-[var(--fg)] hover:bg-[var(--surface)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            >
              {mobileOpen ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className={`md:hidden mx-auto mt-2 backdrop-blur-md bg-white/95 border border-[var(--border)] p-4 flex flex-col gap-2 ${
            isSticky
              ? "rounded-none border-x-0"
              : "max-w-[1024px] rounded-2xl"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-[16px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] ${
                  active
                    ? "bg-[var(--surface)] text-[var(--brand-link)] font-semibold"
                    : "text-[var(--fg)] hover:bg-[var(--surface)]"
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
