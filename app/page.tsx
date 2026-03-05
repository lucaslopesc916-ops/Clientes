import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <CTASection />
    </>
  );
}
