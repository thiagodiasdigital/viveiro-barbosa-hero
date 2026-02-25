import { Hero } from "@/components/Hero/Hero";
import { Cenario } from "@/components/sections/Cenario";
import { Gaps } from "@/components/sections/Gaps";
import { Roda } from "@/components/sections/Roda";
import { Formula } from "@/components/sections/Formula";
import { Fechamento } from "@/components/sections/Fechamento";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cenario />
      <Gaps />
      <Roda />
      <Formula />
      <Fechamento />
      <Footer />
    </main>
  );
}
