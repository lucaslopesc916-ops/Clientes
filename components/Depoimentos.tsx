import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const depoimentos = [
  {
    nome: "Ana Paula de Oliveira",
    pet: "Tutora 🐾",
    texto:
      "Apenas elogios, toda equipe muito atenciosa e acolhedora. Fomos recebidos com tanto amor, muita agilidade no atendimento e tratamento. Nós amamos, já é o nosso lugar preferido.",
    estrelas: 5,
  },
  {
    nome: "Fábio Souza",
    pet: "Tutor da gatinha 🐱",
    texto:
      "Atendimento sem demora e com muito cuidado com os bichinhos. O tratamento de 7 dias que a equipe passou pra minha gata já deu resultado e está sendo acompanhado via WhatsApp pela veterinária que nos atendeu.",
    estrelas: 5,
  },
  {
    nome: "Ana Catarina Lima",
    pet: "Tutora 🐕",
    texto:
      "Atendimento impecável, tiveram todo cuidado com meu cachorro, só tenho a agradecer por todo cuidado e atenção.",
    estrelas: 5,
  },
  {
    nome: "Mariani da Rosa",
    pet: "Tutora 🐾",
    texto:
      "Sempre muito bem atendida, minha cachorrinha tem o melhor tratamento lá. Eles têm muito cuidado e acompanham a gente até os pets ficarem bem.",
    estrelas: 5,
  },
  {
    nome: "Vinícius Nunes de Souza",
    pet: "Tutor do Noah 🐶",
    texto:
      "Levar o Noah ao veterinário se tornou algo descomplicado e divertido com a equipe da Sensipet. É o centro mais preparado da região. Já fazemos acompanhamento há cerca de 1 ano e o cuidado do pós-atendimento é um diferencial.",
    estrelas: 5,
  },
  {
    nome: "Lidiane Silveira Rodrigues",
    pet: "Tutora 🐕",
    texto:
      "Atendimento excelente! Minhas cachorras foram levadas à clínica durante um estado grave e a equipe foi extremamente ágil, atenciosa e eficiente na busca pela recuperação delas. Só gratidão pelo cuidado e profissionalismo. Recomendo!",
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
            O que os tutores dizem sobre a Sensipet
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <FadeIn key={d.nome} delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
