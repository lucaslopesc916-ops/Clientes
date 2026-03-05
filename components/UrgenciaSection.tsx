import Image from "next/image";
import FadeIn from "./FadeIn";

const WA = "https://wa.me/5548996710980?text=Olá!%20Meu%20pet%20precisa%20de%20atendimento%20urgente.";

export default function UrgenciaSection() {
  return (
    <section className="py-20 bg-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeIn direction="right">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Seu pet passou mal? Estamos aqui para ajudar.
            </h2>
            <p className="text-primary-100 text-lg mb-4 leading-relaxed">
              Sabemos que muitas situações acontecem fora do horário comercial.
            </p>
            <p className="text-primary-200 mb-4 leading-relaxed">
              Vômitos, dificuldade para respirar, intoxicações, dor ou mudanças
              repentinas no comportamento podem indicar que seu pet precisa de
              atendimento veterinário imediato.
            </p>
            <p className="text-primary-100 mb-8 leading-relaxed">
              Na Sensipet Centro Veterinário, oferecemos atendimento estendido
              até às 22h, permitindo que seu pet receba avaliação e cuidados
              quando mais precisa.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors inline-block shadow-lg"
            >
              Atendimento imediato no WhatsApp
            </a>
          </FadeIn>

          {/* Photo */}
          <FadeIn direction="left" delay={0.2} className="hidden lg:block">
            <Image
              src="/images/consulta.jpg"
              alt="Atendimento veterinário de urgência Sensipet"
              width={600}
              height={400}
              className="rounded-3xl object-cover w-full h-80 shadow-xl"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
