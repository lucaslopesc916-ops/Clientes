import Link from "next/link";
import { HeartPulse, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              🐾 Cuidado veterinário de excelência
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Seu pet merece{" "}
              <span className="text-primary-600">o melhor cuidado</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Na Sensipet, tratamos cada animal como único. Consultas, vacinas,
              cirurgias e emergência 24h — tudo com carinho, tecnologia e
              profissionais especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/agendamento"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors text-center shadow-lg"
              >
                Agendar Consulta
              </Link>
              <Link
                href="/servicos"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors text-center"
              >
                Ver Serviços
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">+5k</div>
                <div className="text-sm text-gray-500 mt-1">Pets atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">24h</div>
                <div className="text-sm text-gray-500 mt-1">Emergência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">+10</div>
                <div className="text-sm text-gray-500 mt-1">Especialidades</div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: HeartPulse,
                title: "Saúde Preventiva",
                desc: "Vacinas, vermifugação e exames de rotina para manter seu pet sempre saudável.",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: ShieldCheck,
                title: "Cirurgias Seguras",
                desc: "Centro cirúrgico completo com anestesistas e equipe especializada.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Clock,
                title: "Emergência 24h",
                desc: "Plantão veterinário disponível todos os dias, incluindo feriados.",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className={`p-3 rounded-xl ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
