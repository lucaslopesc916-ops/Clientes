import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Ana Paula S.",
    pet: "Tutora do Beethoven 🐶",
    texto:
      "Atendimento incrível! O Beethoven sempre fica nervoso em clínicas, mas aqui ele ficou bem. Equipe super atenciosa e competente.",
    estrelas: 5,
  },
  {
    nome: "Carlos M.",
    pet: "Tutor da Luna 🐱",
    texto:
      "Levei minha gata às 3h da manhã com uma emergência e fui atendido imediatamente. Salvaram a vida da Luna. Sou muito grato!",
    estrelas: 5,
  },
  {
    nome: "Fernanda R.",
    pet: "Tutora do Thor 🐕",
    texto:
      "A estrutura é excelente e os médicos são muito dedicados. Já indiquei para vários amigos. Nota 10 para a Sensipet!",
    estrelas: 5,
  },
  {
    nome: "Roberto L.",
    pet: "Tutor da Mel 🐾",
    texto:
      "Acompanhamento pós-cirúrgico exemplar. Recebi todas as orientações e retornei várias vezes sem cobranças adicionais. Parabéns!",
    estrelas: 5,
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">
            O que dizem os tutores
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Depoimentos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depoimentos.map((d) => (
            <div key={d.nome} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-900">{d.nome}</div>
                <div className="text-xs text-gray-400">{d.pet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
