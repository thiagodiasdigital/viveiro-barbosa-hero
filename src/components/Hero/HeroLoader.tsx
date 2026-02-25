"use client";

interface HeroLoaderProps {
  progress: number;
  visible: boolean;
}

export function HeroLoader({ progress, visible }: HeroLoaderProps) {
  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        background: "#F7F7F2",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-viveiro.jpg"
        alt="Viveiro Barbosa"
        className="mb-8 h-20 w-auto object-contain md:h-28"
        style={{
          animation: visible ? "loaderPulse 1.8s ease-in-out infinite" : "none",
        }}
      />

      <div className="h-[2px] w-36 overflow-hidden rounded-full bg-[rgba(196,120,58,0.15)]">
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-out"
          style={{
            width: `${Math.round(progress * 100)}%`,
            background: "#c4783a",
          }}
        />
      </div>
    </div>
  );
}
