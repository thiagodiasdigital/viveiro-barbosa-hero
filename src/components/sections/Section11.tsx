"use client";

import { useState, useCallback } from "react";

interface FormData {
  nome: string;
  whatsapp: string;
  cidadeUf: string;
  cultura: string;
  quantidade: string;
  quandoPlantar: string;
  mensagem: string;
}

const initialForm: FormData = {
  nome: "",
  whatsapp: "",
  cidadeUf: "",
  cultura: "",
  quantidade: "",
  quandoPlantar: "",
  mensagem: "",
};

const WHATSAPP_NUMBER = "5527998510542";

function buildWhatsAppUrl(data: FormData): string {
  const lines = [
    `*Nome:* ${data.nome}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Cidade/UF:* ${data.cidadeUf}`,
    data.cultura ? `*Cultura:* ${data.cultura}` : "",
    `*Quantidade aprox.:* ${data.quantidade}`,
    `*Quando pretende plantar:* ${data.quandoPlantar}`,
    data.mensagem ? `*Mensagem:* ${data.mensagem}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const text = encodeURIComponent(
    `Ola! Quero o plano final + os valores.\n\n${lines}`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function Section11() {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = useCallback(
    (field: keyof FormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
      },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    },
    [form],
  );

  const inputClass =
    "w-full rounded-lg border border-[#F7F7F2]/20 bg-[#F7F7F2]/10 px-4 py-3 text-sm text-[#F7F7F2] placeholder-[#F7F7F2]/40 outline-none transition-colors focus:border-[#8EC643]/60 focus:ring-1 focus:ring-[#8EC643]/30";

  const fields: {
    label: string;
    key: keyof FormData;
    required?: boolean;
    placeholder: string;
  }[] = [
    { label: "Nome", key: "nome", required: true, placeholder: "Seu nome" },
    {
      label: "WhatsApp",
      key: "whatsapp",
      required: true,
      placeholder: "(00) 00000-0000",
    },
    {
      label: "Cidade/UF (onde vai plantar/receber)",
      key: "cidadeUf",
      required: true,
      placeholder: "Ex: Aracruz/ES",
    },
    {
      label: "Cultura (opcional)",
      key: "cultura",
      placeholder: "Ex: cafe, eucalipto",
    },
    {
      label: "Quantidade aproximada",
      key: "quantidade",
      required: true,
      placeholder: "Ex: 10.000 mudas",
    },
    {
      label: "Quando pretende plantar (mes/semana)",
      key: "quandoPlantar",
      required: true,
      placeholder: "Ex: marco/2026",
    },
  ];

  return (
    <section id="contato" className="bg-[#354E18] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* CTA headline */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight text-[#F7F7F2] md:text-4xl lg:text-5xl">
            Quer chegar em 1,5 milhao de mudas com reserva, prazo e entrega organizada?
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contato-form"
              className="inline-block rounded-full bg-[#8EC643] px-8 py-3 text-sm font-semibold text-[#354E18] transition-colors hover:bg-[#7ab838] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8EC643]"
            >
              Quero o plano final + os valores
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-[#F7F7F2]/30 px-8 py-3 text-sm font-medium text-[#F7F7F2] transition-colors hover:bg-[#F7F7F2]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F7F2]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div id="contato-form" className="mx-auto mt-16 max-w-2xl">
          <p className="text-center text-base leading-relaxed text-[#F7F7F2]/70">
            Me diga cidade, quantidade e quando pretende plantar. A gente retorna com o plano final e os valores.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="mb-1 block text-sm font-medium text-[#F7F7F2]/70">
                    {f.label}
                  </label>
                  <input
                    type="text"
                    required={f.required}
                    value={form[f.key]}
                    onChange={handleChange(f.key)}
                    placeholder={f.placeholder}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[#F7F7F2]/70">
                Mensagem
              </label>
              <textarea
                rows={3}
                value={form.mensagem}
                onChange={handleChange("mensagem")}
                placeholder="Algo mais que queira dizer..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-block rounded-full bg-[#8EC643] px-10 py-3.5 text-sm font-semibold text-[#354E18] transition-colors hover:bg-[#7ab838] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8EC643]"
              >
                Enviar pelo WhatsApp
              </button>
              <p className="mt-3 text-xs text-[#F7F7F2]/50">
                Voce recebe o orcamento completo por WhatsApp e os proximos passos.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
