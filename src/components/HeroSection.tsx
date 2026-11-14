"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage, type Locale } from "@/components/LanguageProvider";
import Magnet from "@/components/Magnet";

export interface HeroCopy {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  localizedCopy?: Partial<Record<Locale, HeroCopy>>;
  logoSrc?: string;
  logoAlt?: string;
  desktopVideoSrc: string;
  mobileVideoSrc: string;
  mobileBreakpointPx?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Full-bleed hero section with responsive background video switching
 * between desktop and mobile viewports, paired with a neutral surface scrim
 * for WCAG AA contrast and a React Bits Magnet CTA.
 */
export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  localizedCopy,
  logoSrc,
  logoAlt = "pesanmobil.com",
  desktopVideoSrc,
  mobileVideoSrc,
  mobileBreakpointPx = 768,
  className = "",
  children,
}: HeroSectionProps) {
  const { locale } = useLanguage();
  const activeCopy = localizedCopy?.[locale];
  const resolvedTitle = activeCopy?.title ?? title;
  const resolvedSubtitle = activeCopy?.subtitle ?? subtitle;
  const resolvedCtaLabel = activeCopy?.ctaLabel ?? ctaLabel;
  const resolvedCtaHref = activeCopy?.ctaHref ?? ctaHref;

  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const viewportQuery = window.matchMedia(
      `(max-width: ${mobileBreakpointPx - 1}px)`
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncViewport = () => {
      setVideoSrc(viewportQuery.matches ? mobileVideoSrc : desktopVideoSrc);
    };

    const syncMotion = () => {
      setReducedMotion(motionQuery.matches);
    };

    syncViewport();
    syncMotion();

    viewportQuery.addEventListener("change", syncViewport);
    motionQuery.addEventListener("change", syncMotion);

    return () => {
      viewportQuery.removeEventListener("change", syncViewport);
      motionQuery.removeEventListener("change", syncMotion);
    };
  }, [desktopVideoSrc, mobileVideoSrc, mobileBreakpointPx]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay may be blocked by browser power-saving settings.
      });
    }
  }, [videoSrc, reducedMotion]);

  return (
    <section
      aria-label="Hero"
      className={`relative w-full h-[100svh] min-h-[100svh] overflow-hidden flex items-center justify-center bg-[var(--bg)] font-sans ${className}`}
    >
      {videoSrc && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
      )}

      {/* Radial surface scrim to soften dither frequency behind text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_55%,rgba(255,255,255,0.25)_100%)]"
      />

      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-6">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={220}
            height={45}
            priority
            className="h-9 sm:h-11 w-auto object-contain"
          />
        )}

        <h1 className="font-sans text-[32px] sm:text-[56px] lg:text-[70px] font-semibold leading-[1.05] tracking-[-0.015em] text-[#1d1d1f]">
          {resolvedTitle}
        </h1>

        {resolvedSubtitle && (
          <p className="max-w-4xl text-[13px] sm:text-[19px] font-normal leading-[1.47] text-[#424245]">
            {resolvedSubtitle}
          </p>
        )}

        {resolvedCtaLabel && resolvedCtaHref && (
          <Magnet padding={48} magnetStrength={4} maxOffset={10}>
            <a
              href={resolvedCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#fb923c] hover:bg-[#f97316] active:bg-[#ea580c] text-[#fefefe] font-semibold text-[12px] sm:text-[17px] px-7 py-3.5 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#0095d9]"
            >
              {resolvedCtaLabel}
            </a>
          </Magnet>
        )}

        {children}
      </div>
    </section>
  );
}
