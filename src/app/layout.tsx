import type { Metadata } from "next";
import { poppins, instrumentSerif, dmSans } from "@/styles/fonts";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viveiro Barbosa — Mudas de Qualidade para Sua Lavoura",
  description:
    "Mudas de café e florestais de alto padrão em Aracruz/ES. Reserva com prazo, padrão por lote e entrega organizada.",
  openGraph: {
    title: "Viveiro Barbosa — Mudas de Qualidade para Sua Lavoura",
    description:
      "Mudas de café e florestais de alto padrão em Aracruz/ES. Reserva com prazo, padrão por lote e entrega organizada.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${instrumentSerif.variable} ${dmSans.variable}`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
