"use client";

const stats = [
  { label: "Hoje", value: "600.000 a 800.000", suffix: "mudas/ano" },
  { label: "Objetivo", value: "1.500.000", suffix: "mudas/ano" },
  { label: "Falta", value: "+700.000 a +900.000", suffix: "mudas/ano (+87,5% a +150%)" },
];

const bullets = [
  "Sem reserva e prazo: você corre e paga o preço do erro",
  "Sem muda no padrão: o pegamento sofre e a lavoura sente",
  "Sem entrega/retirada combinada: dá dor de cabeça e perda no transporte",
];

export function Section01() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Cards de resumo */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3 md:mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[#354E18]/10 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-[#354E18]/60">
                {s.label}
              </span>
              <p className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#354E18] md:text-3xl">
                {s.value}
              </p>
              <span className="text-sm text-[#1F2937]/60">{s.suffix}</span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Pra plantar na epoca certa, a muda tem que estar no ponto na data certa.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1F2937]/70 md:text-lg">
          Reserva, prazo, muda no padrao e entrega/retirada organizada. Sem correria em cima da hora.
        </p>

        {/* Bullets */}
        <ul className="mt-10 space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#6F4C28]" />
              <span className="text-base text-[#1F2937] md:text-lg">{b}</span>
            </li>
          ))}
        </ul>

        {/* Box "Por que da pra crescer" */}
        <div className="mt-12 rounded-xl border border-[#8EC643]/30 bg-[#8EC643]/5 p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18] md:text-xl">
            Por que da pra crescer aqui
          </h3>
          <p className="mt-3 leading-relaxed text-[#1F2937]/80">
            Muita concorrencia e viveiro municipal (gratuito) ou operacao grande (outro jogo).
            O Viveiro Barbosa entra no meio: muda comercial, no padrao, com reserva e prazo.
          </p>
        </div>

        {/* CTA discreto */}
        <div className="mt-10">
          <a
            href="#contato"
            className="inline-block rounded-full border border-[#354E18] px-8 py-3 text-sm font-medium text-[#354E18] transition-colors hover:bg-[#354E18] hover:text-[#F7F7F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#354E18]"
          >
            Quero o plano final + os valores
          </a>
        </div>
      </div>
    </section>
  );
}
