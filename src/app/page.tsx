import { HeroSection } from "@/components/HeroSection";

const HERO_CONTENT = {
  title: "PesanMobil.com",
  subtitle:
    "Sewa mobil lepas kunci minimal 2 hari atau dengan pengemudi. Unit disiapkan melalui mitra rental dan dikonfirmasi via WhatsApp.",
  ctaLabel: "Tanya ketersediaan via WhatsApp",
  ctaHref:
    "https://wa.me/?text=Halo%20pesanmobil.com%2C%20saya%20mau%20tanya%20ketersediaan%20unit%20sewa%20mobil.",
  logoSrc: "/logo.png",
  logoAlt: "pesanmobil.com",
  desktopVideoSrc: "/assets/hazeglow-1-1920x1080-desktop.mp4",
  mobileVideoSrc: "/assets/hazeglow-1-1080x1350-mobile.mp4",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg)] text-[var(--fg)] font-sans">
      <HeroSection
        title={HERO_CONTENT.title}
        subtitle={HERO_CONTENT.subtitle}
        ctaLabel={HERO_CONTENT.ctaLabel}
        ctaHref={HERO_CONTENT.ctaHref}
        logoSrc={HERO_CONTENT.logoSrc}
        logoAlt={HERO_CONTENT.logoAlt}
        desktopVideoSrc={HERO_CONTENT.desktopVideoSrc}
        mobileVideoSrc={HERO_CONTENT.mobileVideoSrc}
      />
    </main>
  );
}
