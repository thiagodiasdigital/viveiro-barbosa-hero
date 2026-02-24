"use client";

interface HeroOverlayLogoProps {
  opacity: number;
}

export function HeroOverlayLogo({ opacity }: HeroOverlayLogoProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      style={{ opacity }}
      aria-hidden={opacity === 0}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-viveiro.jpg"
        alt="Viveiro Barbosa — Mudas de Qualidade para Sua Lavoura"
        className="h-[50vh] w-auto max-w-[80vw] object-contain"
      />
    </div>
  );
}
