import {
  Stethoscope, Scissors, Syringe, Microscope, Clock,
  Bone, Heart, Eye, Droplets, Brain, Activity, PawPrint,
} from "lucide-react";
import Link from "next/link";

const servicos = [
  { icon: Stethoscope, title: "Clínica Geral", desc: "Consultas de rotina, check-up preventivo e acompanhamento da saúde geral do seu pet.", tag: "Preventivo" },
  { icon: Syringe, title: "Vacinação", desc: "Protocolo vacinal completo para cães, gatos e animais exóticos, com carteira de vacinação atualizada.", tag: "Preventivo" },
  { icon: Scissors, title: "Cirurgia", desc: "Centro cirúrgico equipado para procedimentos eletivos e de emergência com anestesia segura.", tag: "Cirúrgico" },
  { icon: Microscope, title: "Laboratório", desc: "Hemograma, bioquímica sérica, urina tipo 1, culturas e outros exames com resultados rápidos.", tag: "Diagnóstico" },
  { icon: Clock, title: "Emergência 24h", desc: "Equipe de plantão todos os dias, incluindo fins de semana e feriados, para urgências veterinárias.", tag: "Urgência" },
  { icon: Heart, title: "Cardiologia", desc: "Eletrocardiograma, ecocardiograma e acompanhamento de cardiopatias em pequenos animais.", tag: "Especialidade" },
  { icon: Bone, title: "Ortopedia", desc: "Diagnóstico e tratamento de fraturas, displasia coxofemoral, ruptura de ligamentos e artrites.", tag: "Especialidade" },
  { icon: Eye, title: "Oftalmologia", desc: "Avaliação da pressão intraocular, tratamento de úlceras corneanas e cirurgias oculares.", tag: "Especialidade" },
  { icon: Droplets, title: "Dermatologia", desc: "Diagnóstico e tratamento de alergias, infecções fúngicas, parasitas e doenças de pele.", tag: "Especialidade" },
  { icon: Brain, title: "Neurologia", desc: "Avaliação de crises epilépticas, hérnias de disco e outras doenças do sistema nervoso.", tag: "Especialidade" },
  { icon: Activity, title: "Ultrassonografia", desc: "Exame de imagem abdominal, cardíaco e obstétrico com equipamento de última geração.", tag: "Diagnóstico" },
  { icon: PawPrint, title: "Animais Exóticos", desc: "Atendimento especializado para coelhos, quelônios, aves e outros animais não convencionais.", tag: "Especial" },
];

const tagColors: Record<string, string> = {
  Preventivo: "bg-green-100 text-green-700",
  Cirúrgico: "bg-purple-100 text-purple-700",
  Diagnóstico: "bg-blue-100 text-blue-700",
  Urgência: "bg-red-100 text-red-700",
  Especialidade: "bg-orange-100 text-orange-700",
  Especial: "bg-teal-100 text-teal-700",
};

export default function ServicosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nossos Serviços</h1>
        <p className="text-primary-100 text-lg max-w-xl mx-auto">
          Do atendimento preventivo às especialidades mais avançadas, a Sensipet oferece cuidado completo para o seu pet.
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
          Pronto para cuidar do seu pet?
        </h2>
        <p className="text-gray-500 mb-6">Agende uma consulta agora mesmo.</p>
        <Link
          href="/agendamento"
          className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors inline-block"
        >
          Agendar Consulta
        </Link>
      </section>
    </div>
  );
}
