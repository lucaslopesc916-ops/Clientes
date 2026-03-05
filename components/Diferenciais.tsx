import { Award, Users, Zap, MapPin } from "lucide-react";

const diferenciais = [
  {
    icon: Award,
    title: "Equipe especializada",
    desc: "Médicos veterinários com pós-graduação e anos de experiência em diversas especialidades.",
  },
  {
    icon: Zap,
    title: "Tecnologia de ponta",
    desc: "Equipamentos modernos para diagnósticos precisos: ultrassom, raio-x digital, endoscopia.",
  },
  {
    icon: Users,
    title: "Atendimento humanizado",
    desc: "Tratamos cada pet e cada tutor com atenção, carinho e transparência em cada etapa.",
  },
  {
    icon: MapPin,
    title: "Localização privilegiada",
    desc: "Fácil acesso, estacionamento amplo e ambiente confortável para você e seu pet.",
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
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Referência em saúde animal na sua cidade
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              A Sensipet nasceu da paixão pelos animais. Combinamos tecnologia
              avançada com atendimento humanizado para garantir o bem-estar do
              seu pet em cada visita.
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
    </section>
  );
}
