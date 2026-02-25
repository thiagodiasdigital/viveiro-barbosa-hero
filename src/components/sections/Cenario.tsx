import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "800 mil", label: "mudas/ano hoje" },
  { value: "1,5 mi", label: "potencial real do viveiro" },
  { value: "+700 mil", label: "mudas que hoje se perdem" },
];

export function Cenario() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div className="mx-auto max-w-[820px] px-6 py-16 md:px-8 md:py-24">
        <Reveal>
          <p
            className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-accent)" }}
          >
            O cenário
          </p>
          <h2
            className="font-[family-name:var(--font-instrument)] font-normal leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--color-text)",
            }}
          >
            Seu viveiro já tá no{" "}
            <em style={{ color: "var(--color-accent)" }}>lugar certo.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-8 space-y-6"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.85,
              color: "var(--color-text-soft)",
            }}
          >
            <p>
              O Viveiro Barbosa produz entre 600 e 800 mil mudas por ano. É muda
              boa, de qualidade, e quem compra sabe disso.
            </p>
            <p>
              Mas olha o que tá acontecendo em volta: o viveiro municipal não dá
              conta. A operação grande não atende o produtor médio. E todo ano
              tem mais gente precisando de muda na época certa, no padrão certo,
              com prazo.
            </p>
            <p>
              Esse espaço no meio? É seu. Já é. Só que hoje uma parte desses
              pedidos vai embora — porque não chega até você, ou chega tarde
              demais.
            </p>
            <p>
              A produção aguenta mais. A demanda existe. O que falta não é muda.{" "}
              <strong
                className="font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                É estrutura pra fazer essa demanda chegar organizada.
              </strong>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-16 grid grid-cols-1 gap-4 border-t pt-16 md:grid-cols-3 md:gap-8"
            style={{ borderColor: "var(--color-line)" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline gap-4 md:block md:text-center"
              >
                <div
                  className="min-w-[120px] font-[family-name:var(--font-instrument)] text-[2rem] leading-[1.1] md:min-w-0 md:text-[2.5rem]"
                  style={{ color: "var(--color-text)" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-0 text-[0.85rem] md:mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
