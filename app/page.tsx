import Hero from "@/components/Hero";
import UrgenciaSection from "@/components/UrgenciaSection";
import AutoridadeSection from "@/components/AutoridadeSection";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import EducacaoSection from "@/components/EducacaoSection";
import EquipeSection from "@/components/EquipeSection";
import Depoimentos from "@/components/Depoimentos";
import LocalizacaoSection from "@/components/LocalizacaoSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <UrgenciaSection />
      <AutoridadeSection />
      <Servicos />
      <Diferenciais />
      <EducacaoSection />
      <EquipeSection />
      <Depoimentos />
      <LocalizacaoSection />
      <CTASection />
    </>
  );
}
