import FadeIn from "./FadeIn";
import {
  Stethoscope,
  Scissors,
  Microscope,
  Clock,
  Bone,
  Heart,
  Eye,
  Activity,
} from "lucide-react";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet.";

const servicos = [
  {
    icon: Stethoscope,
    title: "Consultas Veterinárias",
    desc: "Avaliação clínica completa para diagnóstico e orientação sobre a saúde do seu pet. Avaliamos histórico, sintomas e comportamento do animal para definir a melhor conduta.",
    color: "bg-primary-100 text-primary-700",
    cta: "Agendar consulta",
  },
  {
    icon: Activity,
    title: "Check-up Preventivo",
    desc: "Exames e avaliação clínica para detectar alterações de saúde antes que se tornem problemas mais graves. Ideal para pets adultos e idosos.",
    color: "bg-primary-50 text-primary-600",
    cta: "Agendar check-up",
  },
  {
    icon: Microscope,
    title: "Exames Veterinários",
    desc: "Realizamos exames laboratoriais e diagnósticos que auxiliam na identificação rápida de doenças e alterações clínicas. Isso permite tratamentos mais precisos e seguros.",
    color: "bg-primary-200 text-primary-700",
    cta: "Realizar exames",
  },
  {
    icon: Scissors,
    title: "Limpeza de Tártaro",
    desc: "A saúde bucal do seu pet é fundamental para evitar infecções e problemas sistêmicos. Realizamos avaliação odontológica e procedimentos de limpeza dentária com segurança.",
    color: "bg-primary-100 text-primary-600",
    cta: "Avaliar limpeza dentária",
  },
  {
    icon: Bone,
    title: "Internação Veterinária",
    desc: "Pacientes que precisam de acompanhamento mais próximo podem contar com nossa estrutura de internação. Nossa equipe monitora constantemente o quadro clínico do animal.",
    color: "bg-primary-50 text-primary-700",
    cta: "Falar com veterinário",
  },
  {
    icon: Clock,
    title: "Atendimento de Urgência",
    desc: "Vômitos intensos, intoxicações, convulsões, falta de ar e dor intensa exigem avaliação veterinária rápida. Nossa equipe está preparada para o atendimento inicial.",
    color: "bg-primary-700 text-primary-50",
    cta: "Atendimento imediato",
  },
  {
    icon: Heart,
    title: "Cardiologia",
    desc: "Avaliação cardíaca com eletrocardiograma e ecocardiograma para diagnóstico preciso de cardiopatias.",
    color: "bg-primary-200 text-primary-600",
    cta: "Agendar avaliação",
  },
  {
    icon: Eye,
    title: "Oftalmologia",
    desc: "Consultas e procedimentos especializados para a saúde ocular do seu pet.",
    color: "bg-primary-100 text-primary-700",
    cta: "Agendar consulta",
  },
];

export default function Servicos() {
  return (
    <section className="py-20 bg-gray-50" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Serviços Veterinários
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Na Sensipet oferecemos atendimento completo para diferentes necessidades de saúde do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                {s.cta} →
              </a>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
