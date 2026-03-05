import Image from "next/image";
import FadeIn from "./FadeIn";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet.";

export default function Hero() {
  return (
    <section className="pt-20 bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeIn direction="right">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              🐾 Centro Veterinário Completo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Atendimento completo para{" "}
              <span className="text-primary-600">cuidar do seu pet — até às 22h.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-3 leading-relaxed">
              Consultas, exames, internação e atendimento de urgência em um
              centro veterinário preparado para oferecer cuidado, segurança e
              atenção ao seu pet.
            </p>
            <p className="text-base text-gray-500 mb-8 leading-relaxed">
              Na Sensipet, acreditamos que cada pet merece ser cuidado com
              responsabilidade, carinho e medicina veterinária de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors text-center shadow-lg"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">+5k</div>
                <div className="text-sm text-gray-500 mt-1">Pets atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">22h</div>
                <div className="text-sm text-gray-500 mt-1">Atendimento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600">+10</div>
                <div className="text-sm text-gray-500 mt-1">Especialidades</div>
              </div>
            </div>
          </FadeIn>

          {/* Foto */}
          <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
            <Image
              src="/images/hero.jpg"
              alt="Veterinária Sensipet com pet"
              width={600}
              height={700}
              className="rounded-3xl object-cover w-full h-[580px] shadow-xl"
              priority
            />
            {/* Badge flutuante */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
              <div className="bg-primary-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm">22h</div>
              <div>
                <div className="font-bold text-primary-700 text-sm">Atendimento estendido</div>
                <div className="text-xs text-gray-500">Seg–Sex até às 22h</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
