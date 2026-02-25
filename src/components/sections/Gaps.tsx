import { Reveal } from "@/components/Reveal";

const gaps = [
  {
    num: "01",
    title:
      "Quem precisa de muda na região nem sempre acha o Viveiro Barbosa primeiro.",
    desc: "Tem produtor procurando muda agora e fechando com outro — não porque o outro é melhor, mas porque apareceu antes.",
  },
  {
    num: "02",
    title:
      "A demanda existe, mas nem sempre chega na hora certa.",
    desc: "Tem época que o telefone não para. Tem época que fica quieto. Quando o produtor procura muda em cima da hora, o viveiro já tá no meio de outro lote. Um fluxo mais previsível de pedidos facilita a vida dos dois lados.",
  },
  {
    num: "03",
    title:
      "Quem já comprou e gostou é o cliente mais fácil de manter.",
    desc: "O produtor que levou muda boa volta se lembrar na hora certa. O desafio é só esse: estar presente quando a próxima safra começa a ser planejada.",
  },
  {
    num: "04",
    title:
      "Produtor que confia, reserva mais.",
    desc: "Quando ele vê padrão, organização e prazo cumprido, o pedido cresce naturalmente. É a confiança que faz o volume subir — e ela se constrói entrega por entrega.",
  },
];

export function Gaps() {
  return (
    <section
      className="px-6 py-16 md:px-8 md:py-24"
      style={{ background: "var(--color-soil)", color: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <p
            className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-sand)" }}
          >
            Onde trava
          </p>
          <h2
            className="font-[family-name:var(--font-instrument)] font-normal leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--color-cream)",
            }}
          >
            A gente foi olhar onde o
            <br />
            crescimento trava.{" "}
            <em style={{ color: "var(--color-accent)" }}>
              Achamos quatro pontos.
            </em>
          </h2>
        </Reveal>

        <div className="mt-16">
          {gaps.map((gap, i) => (
            <Reveal key={gap.num} delay={(i + 1) * 0.1}>
              <div
                className={`border-t py-8${i === gaps.length - 1 ? " border-b" : ""}`}
                style={{ borderColor: "rgba(196, 164, 108, 0.12)" }}
              >
                <div
                  className="mb-2 font-[family-name:var(--font-instrument)] text-[3.5rem] leading-none"
                  style={{ color: "rgba(196, 164, 108, 0.3)" }}
                >
                  {gap.num}
                </div>
                <div
                  className="mb-3 font-[family-name:var(--font-instrument)] text-[1.4rem] font-normal leading-[1.3]"
                  style={{ color: "var(--color-cream)" }}
                >
                  {gap.title}
                </div>
                <div
                  className="max-w-[600px] text-[0.95rem] leading-[1.75]"
                  style={{ color: "rgba(240, 230, 211, 0.55)" }}
                >
                  {gap.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="mt-16 border-t pt-8 font-[family-name:var(--font-instrument)] italic leading-[1.5]"
            style={{
              borderColor: "rgba(196, 164, 108, 0.12)",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              color: "var(--color-sand)",
            }}
          >
            Nenhum desses problemas é sobre muda. A muda é boa. O problema é que
            o negócio ao redor da muda ainda não tá no mesmo nível da muda.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
