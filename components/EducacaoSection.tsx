import Image from "next/image";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20um%20check-up%20preventivo%20para%20meu%20pet.";

const itens = [
  "Vacinação regular",
  "Check-ups periódicos",
  "Controle de pulgas e vermes",
  "Acompanhamento de pets idosos",
];

export default function EducacaoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="hidden lg:block rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Cuidado preventivo veterinário Sensipet"
              width={600}
              height={500}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Saúde preventiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Prevenção é a melhor forma de cuidar da saúde do seu pet
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Acompanhamento veterinário regular é essencial para garantir
              qualidade de vida para cães e gatos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Na Sensipet incentivamos:
            </p>

            <ul className="space-y-3 mb-8">
              {itens.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 leading-relaxed mb-8">
              A prevenção permite detectar problemas precocemente e aumentar a
              qualidade de vida do seu pet.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors inline-block shadow-lg"
            >
              Agendar check-up preventivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
