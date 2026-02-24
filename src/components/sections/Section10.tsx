"use client";

import { useState, useCallback } from "react";

const faqs = [
  {
    question: "Como faco pra reservar minhas mudas?",
    answer:
      "Mande mensagem no WhatsApp com tipo de muda, quantidade e cidade. A gente confirma disponibilidade e prazo, e separa o lote pra voce.",
  },
  {
    question: "Qual o prazo e como funciona entrega/retirada?",
    answer:
      "O prazo depende do tipo de muda e da quantidade. Depois de reservar, a gente combina a data e a logistica — entrega ou retirada no viveiro.",
  },
  {
    question: "Como voces mantem a muda no padrao?",
    answer:
      "Cada lote e separado e conferido antes de sair. A muda so vai se estiver no padrao combinado.",
  },
  {
    question: "O que ajuda no pegamento depois do plantio?",
    answer:
      "A gente orienta sobre transporte, aclimatacao e plantio. Muda bem cuidada no caminho pega melhor na lavoura.",
  },
  {
    question: "Voces atendem outras cidades/estados?",
    answer:
      "Sim. Ja atendemos no Espirito Santo e estamos expandindo pro Sudeste. Mande sua cidade e quantidade que a gente ve a logistica.",
  },
];

export function Section10() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-[#1F2937]/60 md:text-lg">
          Pergunta de produtor
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#354E18]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-medium text-[#354E18]">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#354E18"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}
                >
                  <p className="px-5 text-sm leading-relaxed text-[#1F2937]/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
