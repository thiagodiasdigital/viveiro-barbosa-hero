import { Reveal } from "@/components/Reveal";

const factors = [
  { letter: "O", text: "Mais clientes novos", value: "+23%" },
  { letter: "D", text: "Mais clientes voltando", value: "+23%" },
  { letter: "A", text: "Pedidos maiores", value: "+23%" },
];

export function Formula() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 text-center md:px-8 md:py-24"
      style={{
        background:
          "linear-gradient(170deg, var(--color-soil) 0%, #1a2010 100%)",
        color: "var(--color-cream)",
      }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(196, 120, 58, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[700px]">
        <Reveal>
          <p
            className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-sand)" }}
          >
            A conta que prova
          </p>
          <h2
            className="mb-16 font-[family-name:var(--font-instrument)] font-normal leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--color-cream)",
            }}
          >
            Quando as três etapas rodam juntas,
            <br />o resultado não soma.{" "}
            <em style={{ color: "var(--color-accent)" }}>Multiplica.</em>
          </h2>
        </Reveal>

        {/* Equation */}
        <Reveal delay={0.1}>
          <div className="mb-16 flex flex-col items-center gap-5">
            {factors.map((f, i) => (
              <div key={f.letter}>
                <div className="flex w-full max-w-[340px] items-center gap-4 text-[1.1rem] md:max-w-none">
                  <span
                    className="w-9 text-center font-[family-name:var(--font-instrument)] text-[1.8rem] italic"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {f.letter}
                  </span>
                  <span
                    className="text-left"
                    style={{ color: "rgba(240, 230, 211, 0.7)" }}
                  >
                    {f.text}
                  </span>
                  <span
                    className="ml-auto pl-6 font-[family-name:var(--font-instrument)] text-[1.4rem]"
                    style={{ color: "var(--color-sand)" }}
                  >
                    {f.value}
                  </span>
                </div>
                {i < factors.length - 1 && (
                  <div
                    className="mt-5 text-center font-[family-name:var(--font-instrument)] text-[1.2rem]"
                    style={{ color: "rgba(196, 164, 108, 0.3)" }}
                  >
                    &times;
                  </div>
                )}
              </div>
            ))}

            {/* Divider */}
            <div
              className="mx-auto my-2 h-px w-[200px]"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-sand), transparent)",
              }}
            />
          </div>
        </Reveal>

        {/* Result */}
        <Reveal delay={0.2}>
          <div
            className="mb-2 font-[family-name:var(--font-instrument)] leading-[1.1]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-accent-warm)",
            }}
          >
            +87,5%
          </div>
          <div
            className="mb-16 text-[0.85rem] tracking-[0.05em]"
            style={{ color: "rgba(240, 230, 211, 0.4)" }}
          >
            1,23 &times; 1,23 &times; 1,23 &asymp; 1,87
          </div>
        </Reveal>

        {/* Context */}
        <Reveal delay={0.3}>
          <p
            className="mb-4 font-[family-name:var(--font-instrument)] leading-[1.4]"
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              color: "var(--color-cream)",
            }}
          >
            De 800 mil pra{" "}
            <em style={{ color: "var(--color-sand)" }}>
              1,5 milhão de mudas por ano.
            </em>
          </p>
          <p
            className="mx-auto max-w-[480px] text-[0.9rem] leading-[1.6]"
            style={{ color: "rgba(240, 230, 211, 0.4)" }}
          >
            Não é um número inventado. É o que acontece quando três coisas
            melhoram ao mesmo tempo, nem que seja um pouco cada uma. Com método,
            não com força.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
