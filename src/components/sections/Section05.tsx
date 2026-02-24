const columns = [
  {
    period: "Dias 0–30",
    color: "bg-[#8EC643]",
    items: [
      "Organizar capacidade de producao por mes",
      "Definir calendario e janelas de reserva",
      "Organizar atendimento e registro (contato, quantidade, prazo)",
    ],
  },
  {
    period: "Dias 31–60",
    color: "bg-[#354E18]",
    items: [
      "Padronizar lote e rotina de entrega/retirada",
      "Criar agenda/rotas e regras de reserva",
      "Comecar a captar pedidos com antecedencia",
    ],
  },
  {
    period: "Dias 61–90",
    color: "bg-[#6F4C28]",
    items: [
      "Ajustar prazo e logistica pelo que funcionou",
      "Fortalecer prova real (fotos, carregamentos, depoimentos)",
      "Preparar expansao por regiao sem perder padrao",
    ],
  },
];

export function Section05() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Plano de 90 dias
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          O que muda primeiro
        </p>

        {/* Faixa primeiros 14 dias */}
        <div className="mt-10 rounded-xl border border-[#8EC643]/30 bg-[#8EC643]/10 p-5 text-center md:p-6">
          <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-widest text-[#354E18]">
            Primeiros 14 dias
          </span>
          <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80 md:text-base">
            Capacidade por mes + regra de reserva + padrao de atendimento + registro dos pedidos
            (pra escalar sem perder prazo).
          </p>
        </div>

        {/* 3 colunas */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.period}
              className="rounded-xl border border-[#354E18]/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${col.color}`} />
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
                  {col.period}
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-[#1F2937]/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#354E18]/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
