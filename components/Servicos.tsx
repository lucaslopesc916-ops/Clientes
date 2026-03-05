import {
  Stethoscope,
  Scissors,
  Syringe,
  Microscope,
  Clock,
  Bone,
  Heart,
  Eye,
} from "lucide-react";

const servicos = [
  {
    icon: Stethoscope,
    title: "Consultas Clínicas",
    desc: "Avaliação completa da saúde do seu pet com médicos veterinários experientes.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    desc: "Protocolo vacinal atualizado para cães, gatos e animais exóticos.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    desc: "Centro cirúrgico moderno com toda a infraestrutura para procedimentos seguros.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Microscope,
    title: "Exames Laboratoriais",
    desc: "Hemograma, bioquímica, urina e outros exames com resultados rápidos.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Clock,
    title: "Emergência 24h",
    desc: "Plantão veterinário disponível todos os dias, 24 horas por dia.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Heart,
    title: "Cardiologia",
    desc: "Avaliação cardíaca com eletrocardiograma e ecocardiograma.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Bone,
    title: "Ortopedia",
    desc: "Tratamento de fraturas, displasias e doenças articulares.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Eye,
    title: "Oftalmologia",
    desc: "Consultas e procedimentos especializados para a saúde ocular do pet.",
    color: "bg-teal-100 text-teal-600",
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
            Nossos Serviços
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Cuidado completo para o seu pet, do preventivo ao especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
