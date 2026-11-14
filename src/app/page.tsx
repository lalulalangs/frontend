import { HeroSection } from "@/components/HeroSection";

const HERO_CONTENT = {
  title: "PesanMobil.com",
  desktopVideoSrc: "/assets/hazeglow-1-1920x1080-desktop.mp4",
  mobileVideoSrc: "/assets/hazeglow-1-1080x1350-mobile.mp4",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg)] text-[var(--fg)] font-sans">
      <HeroSection
        title={HERO_CONTENT.title}
        desktopVideoSrc={HERO_CONTENT.desktopVideoSrc}
        mobileVideoSrc={HERO_CONTENT.mobileVideoSrc}
      />
    </main>
  );
}
