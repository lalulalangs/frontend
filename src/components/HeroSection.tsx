"use client";

import { useEffect, useRef, useState } from "react";

export interface HeroSectionProps {
  title: string;
  desktopVideoSrc: string;
  mobileVideoSrc: string;
  mobileBreakpointPx?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Full-bleed hero section with responsive background video switching
 * between desktop and mobile viewports.
 */
export function HeroSection({
  title,
  desktopVideoSrc,
  mobileVideoSrc,
  mobileBreakpointPx = 768,
  className = "",
  children,
}: HeroSectionProps) {
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
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      )}

      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-sans text-[40px] sm:text-[56px] lg:text-[80px] font-bold leading-[1.05] tracking-[-0.015em] text-[#F97316]">
          {title}
        </h1>
        //container biar text H1 heronya agak atas dikit.
        <div className= "container mx-auto py-50"></div>
        {children}
      </div>
    </section>
  );
}
