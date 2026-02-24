const metrics = [
  { title: "Reservas do mes", icon: "📋" },
  { title: "Prazo combinado vs entregue", icon: "📅" },
  { title: "Entregas/retiradas feitas", icon: "🚚" },
  { title: "Perdas no transporte (se acontecer)", icon: "⚠️" },
  { title: "Pedidos fechados na semana", icon: "✅" },
  { title: "Tamanho medio do pedido (quantidade)", icon: "📦" },
  { title: "Padrao da muda (checklist do lote)", icon: "🌱" },
  { title: "Recompras/indicacoes", icon: "🔄" },
];

export function Section07() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          O que a gente acompanha
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Numeros que importam
        </p>

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="flex flex-col items-center rounded-xl border border-[#354E18]/10 bg-white p-5 text-center shadow-sm"
            >
              <span className="text-2xl" role="img" aria-hidden="true">
                {m.icon}
              </span>
              <p className="mt-3 text-sm font-medium leading-snug text-[#1F2937]/80">
                {m.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
