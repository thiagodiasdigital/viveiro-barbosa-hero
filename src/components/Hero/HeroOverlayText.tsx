"use client";

interface HeroOverlayTextProps {
  opacity: number;
}

export function HeroOverlayText({ opacity }: HeroOverlayTextProps) {
  const titleColor = `rgba(255, 255, 255, ${opacity})`;
  const subtitleColor = `rgba(255, 255, 255, ${opacity * 0.85})`;
  const btnGreen = `rgba(37, 211, 102, ${opacity})`;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-end"
      aria-hidden={opacity === 0}
    >
      <div
        className="pointer-events-auto mb-20 w-full max-w-[620px] px-6 text-left md:mb-24 md:px-14 lg:px-[90px]"
        style={{ pointerEvents: opacity > 0.1 ? "auto" : "none" }}
      >
        <h2
          className="font-[family-name:var(--font-poppins)] text-4xl font-bold italic leading-[1.15] tracking-normal md:text-6xl lg:text-[72px]"
          style={{ color: titleColor }}
        >
          Onde Nasce Sua Próxima Safra
        </h2>
        <p
          className="mt-6 font-[family-name:var(--font-poppins)] text-xs font-medium uppercase tracking-[0.25em] md:mt-8 md:text-base"
          style={{ color: subtitleColor }}
        >
          Mudas de qualidade para sua lavoura
        </p>
        <a
          href="https://wa.me/5532998494311"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-[50px] items-center justify-center rounded-full px-10 font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#25D366] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:mt-10"
          style={{
            color: btnGreen,
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: btnGreen,
          }}
        >
          Fale no WhatsApp
        </a>
      </div>
    </div>
  );
}
