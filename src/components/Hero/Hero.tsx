"use client";

import { useRef, useMemo } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useImageSequence } from "@/hooks/useImageSequence";
import { HERO_CONFIG } from "./hero.constants";
import { HeroCanvas } from "./HeroCanvas";
import { HeroOverlayText } from "./HeroOverlayText";
import { ScrollIndicator } from "./ScrollIndicator";

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function fadeRange(
  progress: number,
  start: number,
  end: number,
  direction: "in" | "out"
): number {
  if (direction === "out") {
    if (progress <= start) return 1;
    if (progress >= end) return 0;
    return clamp01(1 - (progress - start) / (end - start));
  }
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return clamp01((progress - start) / (end - start));
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);
  const { frames, ready } = useImageSequence();

  const overlays = HERO_CONFIG.overlays;

  const scrollIndicatorOpacity = useMemo(
    () => fadeRange(progress, 0, overlays.scrollIndicatorFadeEnd, "out"),
    [progress, overlays.scrollIndicatorFadeEnd]
  );

  const textOpacity = useMemo(
    () => fadeRange(progress, overlays.textFadeStart, overlays.textFadeEnd, "in"),
    [progress, overlays.textFadeStart, overlays.textFadeEnd]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] md:h-[350vh] lg:h-[450vh]"
      aria-label="Hero — Animação Viveiro Barbosa"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas renderiza os 145 frames — o vídeo JÁ contém o logo e a narrativa */}
        <HeroCanvas
          frames={frames}
          progress={progress}
          totalFrames={HERO_CONFIG.totalFrames}
          ready={ready}
        />

        {/* Gradiente escuro para legibilidade do texto branco */}
        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            opacity: textOpacity,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
          }}
        />

        <ScrollIndicator opacity={scrollIndicatorOpacity} />
        <HeroOverlayText opacity={textOpacity} />
      </div>

      <noscript>
        <div className="relative flex h-screen w-full items-center bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sequences/hero/hero-0145.webp"
            alt="Viveiro Barbosa — Mudas de qualidade para sua lavoura"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[500px] px-8 text-left md:px-16 lg:px-[150px]">
            <h2 className="font-[family-name:var(--font-poppins)] text-5xl font-bold leading-[1.2] text-white">
              Onde Nasce Sua Próxima Safra
            </h2>
            <p className="mt-5 font-[family-name:var(--font-poppins)] text-lg font-medium uppercase tracking-[0.08em] text-white/85">
              Mudas de qualidade para sua lavoura
            </p>
          </div>
        </div>
      </noscript>
    </section>
  );
}
