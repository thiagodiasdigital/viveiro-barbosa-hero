const steps = [
  {
    num: "1",
    title: "Voce manda",
    text: "Tipo de muda, quantidade e cidade.",
  },
  {
    num: "2",
    title: "A gente confirma",
    text: "Disponibilidade e prazo.",
  },
  {
    num: "3",
    title: "Voce reserva",
    text: "E a gente separa o lote.",
  },
  {
    num: "4",
    title: "Entrega/retirada combinada",
    text: "Orientacao pra transportar e plantar.",
  },
];

export function Section03() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Como comprar e reservar
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Passo a passo, sem enrolacao
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="relative rounded-xl border border-[#354E18]/10 bg-white p-6 shadow-sm">
              <span className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#8EC643]/30">
                {s.num}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/70">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block rounded-full bg-[#354E18] px-8 py-3 text-sm font-medium text-[#F7F7F2] transition-colors hover:bg-[#2a3e12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#354E18]"
          >
            Quero o plano final + os valores
          </a>
          <p className="mt-3 text-sm text-[#1F2937]/50">
            Voce recebe o orcamento completo por WhatsApp e os proximos passos.
          </p>
        </div>
      </div>
    </section>
  );
}
