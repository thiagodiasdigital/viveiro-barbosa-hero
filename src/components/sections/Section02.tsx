const cards = [
  {
    title: "Reserva garantida",
    text: "Voce reserva antes e a gente separa o lote.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "Prazo e logistica",
    text: "Entrega/retirada com agenda e combinado.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Muda no padrao + suporte",
    text: "Orientacao de transporte e plantio (melhor pegamento).",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function Section02() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          O que muda quando tem organizacao
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Pra escalar sem perder qualidade
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-start rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] p-6 shadow-sm md:p-8"
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
                {c.title}
              </h3>
              <p className="mt-2 leading-relaxed text-[#1F2937]/70">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-[#1F2937]/70 md:text-lg">
          Crescer pra 1,5M mudas nao e &quot;forca&quot;. E rotina: reserva, lote, prazo e entrega bem feita.
        </p>
      </div>
    </section>
  );
}
