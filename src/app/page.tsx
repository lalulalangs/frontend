"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen h-screen w-full overflow-hidden flex flex-col justify-between text-white font-sans selection:bg-[#0071e3] selection:text-white">
      {/* 1. Background Hero Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Pesan Mobil Rental Hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* 2. Apple Scrim / Dark Gradient Overlay for Maximum Contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/75 pointer-events-none" />

      {/* 3. TOP: Minimalist Floating Navbar (White / Off-White Glass) */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <nav
          className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-full bg-white/90 sm:bg-[#fbfbfd]/90 backdrop-blur-xl border border-white/80 shadow-[0_6px_28px_rgba(0,0,0,0.18)] transition-all duration-300"
          aria-label="Navigasi Utama"
        >
          {/* Logo Brand */}
          <a
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded-full px-1"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071e3] to-[#2997ff] flex items-center justify-center shadow-[0_2px_10px_rgba(0,113,227,0.4)] group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-black transition-colors">
              pesanmobil<span className="text-[#0071e3]">.com</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 tracking-tight">
            <a
              href="#armada"
              className="hover:text-zinc-950 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-950"
            >
              Armada Rental
            </a>
            <a
              href="#cara-sewa"
              className="hover:text-zinc-950 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-950"
            >
              Cara Sewa
            </a>
            <a
              href="#layanan"
              className="hover:text-zinc-950 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-950"
            >
              Layanan
            </a>
            <a
              href="#promo"
              className="hover:text-zinc-950 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-950"
            >
              Promo
            </a>
            <a
              href="#tentang-kami"
              className="hover:text-zinc-950 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-950"
            >
              Tentang Kami
            </a>
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/?text=Halo%20pesanmobil.com,%20saya%20ingin%20konsultasi%20rental%20mobil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2 rounded-full transition-all duration-200 shadow-[0_2px_12px_rgba(0,113,227,0.35)] hover:shadow-[0_4px_16px_rgba(0,113,227,0.45)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
            >
              <svg
                className="w-3.5 h-3.5 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Konsultasi</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-700 hover:text-zinc-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu (White / Off-White) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3.5 rounded-3xl bg-white/95 sm:bg-[#fbfbfd]/95 backdrop-blur-2xl border border-zinc-200/80 shadow-2xl flex flex-col gap-1.5 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#armada"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Armada Rental
            </a>
            <a
              href="#cara-sewa"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Cara Sewa
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Layanan
            </a>
            <a
              href="#promo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Promo
            </a>
            <a
              href="#tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Tentang Kami
            </a>
          </div>
        )}
      </header>

      {/* 4. CENTER: Main Hero Showcase Content */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto py-8 sm:py-12">
        {/* Master Headline (SF Pro Display Semibold Style) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.08] text-white">
          Kemudahan Pesan Rental Mobil dalam Satu Genggaman.
        </h1>

        {/* Subheadline (SF Pro Text Style) */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/75 max-w-2xl font-normal leading-relaxed tracking-tight">
          Sewa mobil harian, mingguan, hingga bulanan dengan pilihan lepas kunci atau supir profesional. Armada bersih, terawat, dan siap menemani perjalanan Anda.
        </p>

        {/* Action Buttons (Capsule Geometry) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action Button */}
          <a
            href="#pesan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm sm:text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,113,227,0.5)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff]"
          >
            <span>Pesan Rental Sekarang</span>
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>

          {/* Secondary Action Button */}
          <a
            href="#armada"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md border border-white/20 text-white font-medium text-sm sm:text-base transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Pilih Armada Mobil</span>
            <svg
              className="w-4 h-4 text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </a>
        </div>

        {/* Quick Rental Categories / Tags */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
          <span className="text-white/40 mr-1">Pilihan Layanan:</span>
          {["Lepas Kunci", "Dengan Supir", "Avanza", "Innova Zenix", "Fortuner", "Alphard", "Hiace"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/80 text-xs"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </main>

      {/* 5. BOTTOM: Minimalist Clean Bar (Cards Removed) */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-7">
        <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 tracking-tight gap-2">
          <span>© 2026 pesanmobil.com · Seluruh hak cipta dilindungi.</span>
          <span className="hidden sm:inline">
            Platform Pemesanan Rental & Sewa Mobil Terpercaya di Indonesia
          </span>
        </div>
      </footer>
    </div>
  );
}
