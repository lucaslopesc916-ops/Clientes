import {
  Stethoscope, Scissors, Syringe, Microscope, Clock,
  Bone, Heart, Eye, Droplets, Brain, Activity, PawPrint,
} from "lucide-react";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet.";

const servicos = [
  { icon: Stethoscope, title: "Consultas Veterinárias", desc: "Avaliação clínica completa para diagnóstico e orientação sobre a saúde do seu pet. Avaliamos histórico, sintomas e comportamento do animal para definir a melhor conduta.", tag: "Preventivo" },
  { icon: Activity, title: "Check-up Preventivo", desc: "Exames e avaliação clínica para detectar alterações de saúde antes que se tornem problemas mais graves. Ideal para pets adultos e idosos.", tag: "Preventivo" },
  { icon: Microscope, title: "Exames Veterinários", desc: "Exames laboratoriais e diagnósticos que auxiliam na identificação rápida de doenças e alterações clínicas. Isso permite tratamentos mais precisos e seguros.", tag: "Diagnóstico" },
  { icon: Scissors, title: "Limpeza de Tártaro", desc: "A saúde bucal do seu pet é fundamental para evitar infecções e problemas sistêmicos. Realizamos avaliação odontológica e limpeza dentária com segurança.", tag: "Preventivo" },
  { icon: Bone, title: "Internação Veterinária", desc: "Pacientes que precisam de acompanhamento mais próximo podem contar com nossa estrutura de internação. Nossa equipe monitora constantemente o quadro clínico do animal.", tag: "Especialidade" },
  { icon: Clock, title: "Atendimento de Urgência", desc: "Vômitos intensos, intoxicações, convulsões, falta de ar ou dor intensa exigem avaliação rápida. Nossa equipe está preparada para atendimento inicial e orientação do tutor.", tag: "Urgência" },
  { icon: Heart, title: "Cardiologia", desc: "Eletrocardiograma, ecocardiograma e acompanhamento de cardiopatias em pequenos animais.", tag: "Especialidade" },
  { icon: Eye, title: "Oftalmologia", desc: "Avaliação da pressão intraocular, tratamento de úlceras corneanas e procedimentos especializados para saúde ocular.", tag: "Especialidade" },
  { icon: Droplets, title: "Dermatologia", desc: "Diagnóstico e tratamento de alergias, infecções fúngicas, parasitas e doenças de pele.", tag: "Especialidade" },
  { icon: Brain, title: "Neurologia", desc: "Avaliação de crises epilépticas, hérnias de disco e outras doenças do sistema nervoso.", tag: "Especialidade" },
  { icon: Syringe, title: "Vacinação", desc: "Protocolo vacinal completo para cães, gatos e animais exóticos, com carteira de vacinação atualizada.", tag: "Preventivo" },
  { icon: PawPrint, title: "Animais Exóticos", desc: "Atendimento especializado para coelhos, quelônios, aves e outros animais não convencionais.", tag: "Especial" },
];

const tagColors: Record<string, string> = {
  Preventivo: "bg-primary-100 text-primary-700",
  Cirúrgico: "bg-primary-200 text-primary-700",
  Diagnóstico: "bg-primary-50 text-primary-600",
  Urgência: "bg-primary-700 text-primary-50",
  Especialidade: "bg-primary-100 text-primary-600",
  Especial: "bg-primary-200 text-primary-600",
};

export default function ServicosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Serviços Veterinários</h1>
        <p className="text-primary-100 text-lg max-w-xl mx-auto">
          Na Sensipet oferecemos atendimento completo para diferentes necessidades de saúde do seu pet, do preventivo ao especializado.
        </p>
      </div>

      {/* Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-xl">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[s.tag]}`}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Seu pet merece cuidado e atenção em todos os momentos.
        </h2>
        <p className="text-gray-500 mb-6">Agende uma consulta agora mesmo e cuide da saúde de quem você ama.</p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors inline-block"
        >
          Agendar Consulta
        </a>
      </section>
    </div>
  );
}
