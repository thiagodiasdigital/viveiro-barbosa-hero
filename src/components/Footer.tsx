export function Footer() {
  return (
    <footer
      className="px-8 py-16 text-center"
      style={{
        background: "var(--color-soil)",
        borderTop: "1px solid rgba(196, 164, 108, 0.1)",
      }}
    >
      <div
        className="text-[0.8rem] font-medium tracking-[0.1em]"
        style={{ color: "var(--color-sand)" }}
      >
        Dias Digital
      </div>
      <div
        className="mt-2 text-[0.75rem] leading-[1.6]"
        style={{ color: "rgba(196, 164, 108, 0.35)" }}
      >
        Estratégia de crescimento para negócios locais
      </div>
      <div
        className="mx-auto my-5 h-px w-10"
        style={{ background: "rgba(196, 164, 108, 0.15)" }}
      />
      <div
        className="text-[0.7rem]"
        style={{ color: "rgba(196, 164, 108, 0.25)" }}
      >
        Página desenvolvida exclusivamente para o Viveiro Barbosa &middot; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
