import Image from "next/image";
import FadeIn from "./FadeIn";

const equipe = [
  {
    foto: "/images/vet1.jpg",
    nome: "Mariana Tamagusko",
    cargo: "Médica Veterinária",
  },
  {
    foto: "/images/vet2.jpg",
    nome: "Laura Milak",
    cargo: "Médica Veterinária",
  },
  {
    foto: "/images/vet3.jpg",
    nome: "João Vitor Lima",
    cargo: "Médico Veterinário",
  },
];

export default function EquipeSection() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Quem cuida do seu pet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Nossa equipe
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Nossa equipe é formada por profissionais comprometidos com a saúde
            animal e com o cuidado responsável dos pacientes. Cada atendimento
            é realizado com atenção, responsabilidade e respeito ao tutor e ao
            pet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {equipe.map((v, i) => (
            <FadeIn key={v.nome + v.cargo} delay={i * 0.15}>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden shadow-md mb-4 mx-auto w-full aspect-[3/4]">
                <Image
                  src={v.foto}
                  alt={v.nome}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-bold text-gray-900">{v.nome}</h3>
              <p className="text-sm text-primary-600 font-medium">{v.cargo}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
