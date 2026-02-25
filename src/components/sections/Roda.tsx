import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

interface Step {
  letter: string;
  name: string;
  subtitle: string;
  content: ReactNode;
  applied: string;
}

const steps: Step[] = [
  {
    letter: "R",
    name: "Rastrear",
    subtitle: "Primeiro, clareza.",
    content: (
      <>
        <p>
          Antes de qualquer ação, a gente precisa enxergar o negócio de verdade.
          Quantas mudas saem por mês. Como os pedidos chegam. Que tipo de cliente
          compra, quando compra, quanto compra. Onde tá o gargalo — se é na
          produção, no atendimento ou na procura.
        </p>
        <p>
          <strong style={{ color: "var(--color-text)" }}>
            Sem esse raio-x, qualquer ideia é chute.
          </strong>{" "}
          Com ele, cada passo seguinte é certeiro.
        </p>
      </>
    ),
    applied:
      "Aplicado ao Viveiro Barbosa: já mapeamos. 600 a 800 mil mudas/ano, demanda reativa, produtores da região que procuram muda nem sempre chegam até você. O diagnóstico tá feito.",
  },
  {
    letter: "O",
    name: "Oferecer",
    subtitle: "Ser encontrado por quem já tá procurando.",
    content: (
      <>
        <p>
          Tem produtor precisando de muda agora. Ele procura, pergunta, pede
          indicação. A pergunta é:{" "}
          <strong style={{ color: "var(--color-text)" }}>
            o Viveiro Barbosa aparece nessa hora?
          </strong>
        </p>
        <p>
          Essa etapa faz o viveiro ser visto por quem já quer comprar — de forma
          contínua, não por sorte. Não é esperar o telefone tocar. É fazer ele
          tocar mais.
        </p>
      </>
    ),
    applied:
      "Na prática: mais gente nova pedindo orçamento. Gente que antes nem sabia que o viveiro existia.",
  },
  {
    letter: "D",
    name: "Dominar",
    subtitle: "Quem comprou uma vez, volta.",
    content: (
      <>
        <p>
          O cliente mais barato é o que já comprou de você. Ele já conhece a
          muda, já sabe que é boa. Mas se ninguém chama ele de volta na próxima
          safra, ele compra de quem aparecer.
        </p>
        <p>
          Essa etapa cria o motivo e a facilidade pra ele voltar. Sem precisar
          convencer de novo — só relembrar e facilitar.
        </p>
      </>
    ),
    applied:
      "Na prática: o produtor que comprou em 2025 já tá reservado pra 2026. Ele volta porque faz sentido voltar.",
  },
  {
    letter: "A",
    name: "Aumentar",
    subtitle: "Cada pedido pode ser maior.",
    content: (
      <>
        <p>
          Quando o produtor confia, quando vê organização e padrão, ele pede
          mais. Não é empurrar. É mostrar que o viveiro dá conta — e que reservar
          mais agora sai melhor do que correr depois.
        </p>
        <p>
          Essa etapa faz o pedido médio crescer porque o produtor{" "}
          <strong style={{ color: "var(--color-text)" }}>quer</strong> pedir
          mais, não porque foi pressionado.
        </p>
      </>
    ),
    applied:
      "Na prática: onde antes saíam 500 mudas por pedido, passam a sair 600, 700. Mesmo cliente, pedido maior.",
  },
];

export function Roda() {
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
            O método
          </p>
          <h2
            className="font-[family-name:var(--font-instrument)] font-normal leading-[1.15]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--color-text)",
            }}
          >
            Pra cada travamento, uma etapa.
            <br />
            Isso aqui é o{" "}
            <em style={{ color: "var(--color-accent)" }}>Método R.O.D.A.</em>
          </h2>
          <p
            className="mt-4 max-w-[620px] text-[1.1rem] leading-[1.8]"
            style={{ color: "var(--color-text-soft)" }}
          >
            A gente não sai fazendo coisa aleatória. Tem uma ordem. Cada etapa
            resolve um ponto que trava o crescimento do viveiro. Uma depende da
            outra — e quando as quatro rodam juntas, o resultado multiplica.
          </p>
        </Reveal>

        <div className="mt-16">
          {steps.map((step, i) => (
            <Reveal key={step.letter}>
              <div
                className={`grid grid-cols-1 items-start gap-4 border-t py-16 md:grid-cols-[auto_1fr] md:gap-8${i === steps.length - 1 ? " border-b" : ""}`}
                style={{ borderColor: "var(--color-line)" }}
              >
                {/* Letter */}
                <div className="relative">
                  <div
                    className="w-auto text-left font-[family-name:var(--font-instrument)] font-normal leading-none md:w-20 md:text-center"
                    style={{
                      fontSize: "clamp(3.5rem, 8vw, 6rem)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {step.letter}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0 md:pt-2">
                  <div
                    className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {step.name}
                  </div>
                  <div
                    className="mb-4 font-[family-name:var(--font-instrument)] text-[1.1rem] italic"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {step.subtitle}
                  </div>
                  <div
                    className="space-y-4 text-[1.05rem] leading-[1.8]"
                    style={{ color: "var(--color-text-soft)" }}
                  >
                    {step.content}
                  </div>
                  <p
                    className="mt-4 border-l-2 pl-4 text-[0.9rem] italic leading-[1.7]"
                    style={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {step.applied}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
