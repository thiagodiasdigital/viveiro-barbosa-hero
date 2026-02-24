import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:px-8 lg:px-12">
        <Image
          src="/logo-viveiro.jpg"
          alt="Viveiro Barbosa"
          width={120}
          height={48}
          className="rounded object-contain"
        />
        <p className="text-center text-xs text-[#F7F7F2]/50">
          &copy; {year} Viveiro Barbosa — Mudas de qualidade para sua lavoura. Aracruz/ES.
        </p>
      </div>
    </footer>
  );
}
