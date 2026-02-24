const rodaSteps = [
  {
    letter: "R",
    title: "Rastrear",
    subtitle: "Organizar a producao",
    items: [
      "Saber quantas mudas saem por mes (capacidade real)",
      "Definir calendario e saida por periodo",
      "Ver onde trava: producao, atendimento ou entrega",
    ],
  },
  {
    letter: "O",
    title: "Oferecer",
    subtitle: "Abrir reserva e organizar prazo",
    items: [
      "Abrir reserva por 'janela' (ex: pra tal mes)",
      "Confirmar prazo por escrito (sem adivinhacao)",
      "Ser encontrado por quem procura mudas na regiao",
    ],
  },
  {
    letter: "D",
    title: "Dominar",
    subtitle: "Manter padrao e rotina",
    items: [
      "Separacao por lote e padrao de muda",
      "Rotina de entrega/retirada",
      "Pos-plantio: orientacao pra aumentar o pegamento",
    ],
  },
  {
    letter: "A",
    title: "Aumentar",
    subtitle: "Atender mais lugares com controle",
    items: [
      "Pedidos maiores e mais organizados",
      "Rotas/parcerias pra ampliar sem baguncar",
      "Crescer por regiao sem perder qualidade",
    ],
  },
];

export function Section04() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          O metodo pra crescer sem perder o padrao
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Metodo R.O.D.A. — traduzido pro dia a dia
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {rodaSteps.map((step) => (
            <div
              key={step.letter}
              className="rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] p-6 shadow-sm md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#354E18] font-[family-name:var(--font-poppins)] text-xl font-bold text-[#F7F7F2]">
                  {step.letter}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
                    {step.title}
                  </h3>
                  <span className="text-sm text-[#1F2937]/60">{step.subtitle}</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#1F2937]/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8EC643]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Box "A conta dos 20%" */}
        <div className="mt-12 rounded-xl border border-[#354E18]/15 bg-[#354E18]/5 p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#354E18]">
            A conta dos 20% (crescimento composto)
          </h3>
          <p className="mt-4 leading-relaxed text-[#1F2937]/80">
            O crescimento vem de 3 coisas ao mesmo tempo:
          </p>
          <ol className="mt-3 space-y-2 pl-5">
            <li className="list-decimal text-[#1F2937]/80">
              Mais gente pedindo orcamento no WhatsApp <span className="text-[#1F2937]/50">(atrair)</span>
            </li>
            <li className="list-decimal text-[#1F2937]/80">
              Mais orcamento virando reserva <span className="text-[#1F2937]/50">(processo/atendimento)</span>
            </li>
            <li className="list-decimal text-[#1F2937]/80">
              Pedidos maiores — mais mudas por reserva
            </li>
          </ol>
          <p className="mt-4 leading-relaxed text-[#1F2937]/80">
            Se melhorar 20% em cada uma, nao soma 20+20+20. Multiplica:{" "}
            <strong className="text-[#354E18]">1,2 &times; 1,2 &times; 1,2 = 1,728</strong>.
          </p>
          <p className="mt-2 font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
            Isso da +72,8% de crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}
