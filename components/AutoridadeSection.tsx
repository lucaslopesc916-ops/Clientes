import Image from "next/image";

export default function AutoridadeSection() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Nossa estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Centro Veterinário Completo para Cuidar da Saúde do Seu Pet
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fotos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/fachada.jpg"
                alt="Fachada Sensipet Centro Veterinário"
                width={700}
                height={280}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/equipe.jpg"
                alt="Equipe Sensipet"
                width={340}
                height={200}
                className="w-full h-44 object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/consulta.jpg"
                alt="Consulta veterinária Sensipet"
                width={340}
                height={200}
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A Sensipet foi criada com o objetivo de oferecer medicina
              veterinária responsável, estrutura moderna e atendimento
              acolhedor.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aqui o tutor encontra tudo o que precisa para cuidar da saúde do
              seu pet em um único lugar, com acompanhamento profissional e
              orientação clara.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nosso compromisso é oferecer diagnóstico preciso, tratamento
              seguro e acompanhamento próximo do tutor em cada etapa.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { valor: "98%", label: "Satisfação dos tutores" },
                { valor: "+8", label: "Anos de experiência" },
                { valor: "+5k", label: "Pets atendidos" },
                { valor: "22h", label: "Atendimento diário" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-primary-100 text-center">
                  <div className="text-3xl font-extrabold text-primary-600">{item.valor}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
