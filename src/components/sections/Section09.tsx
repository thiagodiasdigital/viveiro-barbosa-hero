const deliverables = [
  {
    title: "Regras de reserva e prazo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M9 4v6" />
      </svg>
    ),
  },
  {
    title: "Rotina de lote e padrao de muda",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Rotas/agenda de entrega/retirada",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Pagina simples pra pedido e contato",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Registro de contatos e pedidos (controle do WhatsApp)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Plano de expansao pro Sudeste (cenarios + calculadora)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-8" />
      </svg>
    ),
  },
];

export function Section09() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          O que voce recebe
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Entregaveis
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-4 rounded-xl border border-[#354E18]/10 bg-white p-5 shadow-sm"
            >
              <div className="flex-shrink-0 mt-0.5">{d.icon}</div>
              <p className="text-sm font-medium leading-snug text-[#1F2937]/80 md:text-base">
                {d.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#8EC643]/30 bg-[#8EC643]/5 p-6 text-center md:p-8">
          <p className="text-base leading-relaxed text-[#1F2937]/80 md:text-lg">
            Tudo vira rotina: reserva, prazo, lote, entrega e numero acompanhado toda semana.
          </p>
        </div>
      </div>
    </section>
  );
}
