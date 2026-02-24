"use client";

import { useState, useCallback } from "react";

const scenarios = [
  {
    letter: "A",
    title: "Transportadora / parceiros",
    text: "Comeca mais leve, controle medio.",
  },
  {
    letter: "B",
    title: "Frota / rota propria",
    text: "Custa mais, controle maior.",
  },
  {
    letter: "C",
    title: "Pontos de apoio por estado",
    text: "Investimento maior, escala maior.",
  },
];

const investComponents = [
  "Logistica: embalagem, pallets, frete/rota, perdas",
  "Atendimento: WhatsApp, registro, tempo de resposta",
  "Presenca no Google: ser encontrado por quem procura mudas",
  "Parcerias: agropecuaria/assistencia tecnica pra indicar e reservar",
  "Capital de giro: produzir antes de sair",
  "Divulgacao (anuncios): investimento em trafego pago pra gerar pedidos",
];

function Calculator() {
  const [values, setValues] = useState({
    estados: 4,
    entregasMes: 0,
    custoEntrega: 0,
    custoAtendimento: 0,
    custoAnuncios: 0,
    capitalGiro: 0,
  });

  const handleChange = useCallback(
    (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "");
      setValues((prev) => ({ ...prev, [field]: Number(raw) || 0 }));
    },
    [],
  );

  const mensal =
    values.entregasMes * values.custoEntrega +
    values.custoAtendimento +
    values.custoAnuncios;

  const inicial = values.capitalGiro + mensal;

  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const fields: { label: string; key: keyof typeof values; prefix?: string }[] = [
    { label: "Estados a atender", key: "estados" },
    { label: "Entregas/mes", key: "entregasMes" },
    { label: "Custo medio por entrega", key: "custoEntrega", prefix: "R$" },
    { label: "Custo mensal de atendimento", key: "custoAtendimento", prefix: "R$" },
    { label: "Custo mensal de anuncios (midia)", key: "custoAnuncios", prefix: "R$" },
    { label: "Capital de giro estimado", key: "capitalGiro", prefix: "R$" },
  ];

  return (
    <div className="mt-12 rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] p-6 shadow-sm md:p-8">
      <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#354E18]">
        Calculadora de investimento
      </h3>
      <p className="mt-1 text-sm text-[#1F2937]/50">Preencha para ter uma estimativa orientativa.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-[#1F2937]/70">
              {f.label}
            </label>
            <div className="relative mt-1">
              {f.prefix && (
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#1F2937]/40">
                  {f.prefix}
                </span>
              )}
              <input
                type="text"
                inputMode="numeric"
                value={values[f.key] || ""}
                onChange={handleChange(f.key)}
                className={`w-full rounded-lg border border-[#354E18]/15 bg-white py-2.5 text-sm text-[#1F2937] outline-none transition-colors focus:border-[#354E18]/40 focus:ring-1 focus:ring-[#354E18]/20 ${f.prefix ? "pl-10 pr-3" : "px-3"}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Resultados */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-[#354E18] p-5 text-center">
          <span className="text-xs uppercase tracking-widest text-[#F7F7F2]/60">
            Estimativa mensal
          </span>
          <p className="mt-1 font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#F7F7F2]">
            {fmt(mensal)}
          </p>
        </div>
        <div className="rounded-lg bg-[#6F4C28] p-5 text-center">
          <span className="text-xs uppercase tracking-widest text-[#F7F7F2]/60">
            Estimativa inicial
          </span>
          <p className="mt-1 font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#F7F7F2]">
            {fmt(inicial)}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[#1F2937]/50">
        Estimativa orientativa. Valor real depende de distancia, volume e modelo de entrega.
      </p>
      <p className="mt-1 text-xs leading-relaxed text-[#1F2937]/50">
        Observacao: aqui e so anuncios (midia). Honorarios da agencia sao informados apos contato.
      </p>
    </div>
  );
}

export function Section06() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#354E18] md:text-4xl lg:text-5xl">
          Quanto custa levar muda pro Sudeste com organizacao?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-[#1F2937]/60 md:text-lg">
          O valor muda conforme entrega, atendimento e volume. Aqui e pra voce ter nocao e fazer conta.
        </p>

        {/* Cenarios */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {scenarios.map((s) => (
            <div
              key={s.letter}
              className="rounded-xl border border-[#354E18]/10 bg-[#F7F7F2] p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#354E18] font-[family-name:var(--font-poppins)] text-sm font-bold text-[#F7F7F2]">
                {s.letter}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-[#1F2937]/70">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Componentes do investimento */}
        <div className="mt-10">
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#354E18]">
            Componentes do investimento
          </h3>
          <ul className="mt-4 space-y-2">
            {investComponents.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-[#1F2937]/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8EC643]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Calculator />
      </div>
    </section>
  );
}
