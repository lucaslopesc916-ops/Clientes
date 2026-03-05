const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet.";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Seu pet merece cuidado e atenção em todos os momentos.
        </h2>
        <p className="text-primary-100 text-lg mb-8">
          Na Sensipet Centro Veterinário, você encontra estrutura, profissionais
          qualificados e atendimento acolhedor para cuidar da saúde do seu pet
          com responsabilidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            Agendar Consulta
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
