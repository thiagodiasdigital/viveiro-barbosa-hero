const checklist = [
  "Produzir sem ter reserva suficiente",
  "Prometer prazo que nao da pra cumprir",
  "Misturar muita coisa cedo e perder padrao",
  "Deixar entrega/retirada no improviso",
  "Perder pedido por demora no WhatsApp",
];

export function Section08() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Problemas que a gente evita
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Na pratica
        </p>

        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] px-5 py-4 shadow-sm"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" stroke="#354E18" strokeWidth="1.5" />
                <path d="M8 12l3 3 5-5" stroke="#354E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-base text-[#1F2937]/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
