import { HeroSection } from "@/components/HeroSection";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

const HERO_CONTENT = {
  title: "Perjalanan nyaman dimulai dari unit yang pas buat kamu",
  subtitle:
    "Mau sewa lepas kunci atau ditemani pengemudi berpengalaman? Pilih unit yang kamu mau, lalu kirim chat ke WhatsApp agar tim kami bantu siapkan unitnya!.",
  ctaLabel: "Tanya ketersediaan via WhatsApp",
  ctaHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Halo pesanmobil.com, saya mau tanya ketersediaan unit sewa mobil."
  )}`,
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
