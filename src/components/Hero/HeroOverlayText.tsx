"use client";

interface HeroOverlayTextProps {
  opacity: number;
}

export function HeroOverlayText({ opacity }: HeroOverlayTextProps) {
  const titleColor = `rgba(53, 78, 24, ${opacity})`;
  const textSecondary = `rgba(31, 41, 55, ${opacity * 0.7})`;
  const btnColor = `rgba(53, 78, 24, ${opacity})`;
  const borderColor = `rgba(53, 78, 24, ${opacity})`;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-end"
      aria-hidden={opacity === 0}
    >
      <div
        className="pointer-events-auto mb-12 w-full max-w-2xl px-8 text-left md:mb-20 md:px-16 lg:px-24"
        style={{ pointerEvents: opacity > 0.1 ? "auto" : "none" }}
      >
        <h2
          className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-[1.1] tracking-normal md:text-5xl lg:text-[64px]"
          style={{ color: titleColor }}
        >
          Onde Nasce Sua Próxima Safra
        </h2>
        <p
          className="mt-4 font-[family-name:var(--font-inter)] text-sm font-light uppercase tracking-[0.15em] md:mt-6 md:text-base"
          style={{ color: textSecondary }}
        >
          Mudas de qualidade para sua lavoura
        </p>
        <a
          href="https://wa.me/5527998510542"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[#354E18] hover:text-[#F7F7F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#354E18] md:mt-8"
          style={{
            color: btnColor,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderColor,
          }}
        >
          Fale no WhatsApp
        </a>
      </div>
    </div>
  );
}
