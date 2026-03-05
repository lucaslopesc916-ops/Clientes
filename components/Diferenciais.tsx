import Image from "next/image";
import { Clock, Users, Zap, Heart } from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "Atendimento até às 22h",
    desc: "Muitas clínicas encerram o atendimento no início da noite. Na Sensipet você encontra suporte veterinário estendido para trazer mais segurança ao tutor.",
  },
  {
    icon: Zap,
    title: "Estrutura completa",
    desc: "Consultas, exames, acompanhamento e procedimentos realizados no mesmo local. Isso facilita o diagnóstico e o tratamento do seu pet.",
  },
  {
    icon: Users,
    title: "Equipe veterinária dedicada",
    desc: "Profissionais comprometidos com medicina veterinária responsável e atendimento acolhedor em cada consulta.",
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    desc: "Sabemos que os pets fazem parte da família. Nosso atendimento busca acolher tanto o animal quanto o tutor.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Por que escolher a Sensipet
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Centro Veterinário Completo para Cuidar da Saúde do Seu Pet
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              A Sensipet foi criada com o objetivo de oferecer medicina
              veterinária responsável, estrutura moderna e atendimento
              acolhedor. Aqui o tutor encontra tudo o que precisa para cuidar
              da saúde do seu pet em um único lugar, com acompanhamento
              profissional e orientação clara.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-4xl font-extrabold text-primary-600">98%</div>
                <div className="text-sm text-gray-500 mt-1">Satisfação dos tutores</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-primary-600">+8</div>
                <div className="text-sm text-gray-500 mt-1">Anos de experiência</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6 shadow-md">
              <Image
                src="/images/equipe.jpg"
                alt="Equipe Sensipet Centro Veterinário"
                width={600}
                height={260}
                className="w-full h-52 object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="bg-primary-50 rounded-2xl p-6 border border-primary-100"
              >
                <div className="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
