import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-3">Fale Conosco</h1>
        <p className="text-primary-100 text-lg">
          Estamos disponíveis para atender você e seu pet.
        </p>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Informações de Contato</h2>

              {[
                {
                  icon: Phone,
                  title: "WhatsApp / Telefone",
                  content: "(48) 99671-0980",
                  link: "https://wa.me/5548996710980",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  content: "contato@sensipet.com.br",
                  link: "mailto:contato@sensipet.com.br",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: MapPin,
                  title: "Endereço",
                  content: "Av. Inocente Pagnan, 201 — Centro\nMorro da Fumaça – SC, 88830-000",
                  color: "bg-orange-100 text-orange-600",
                },
                {
                  icon: Clock,
                  title: "Horário de Funcionamento",
                  content: "Seg–Sex: 08h às 18h\nSáb: 08h às 12h\nEmergência 24h todos os dias",
                  color: "bg-purple-100 text-purple-600",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                  <div className={`p-3 rounded-xl h-fit ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Localização</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96">
                <iframe
                  title="Localização Sensipet"
                  src="https://maps.google.com/maps?q=Av.+Inocente+Pagnan,+201,+Centro,+Morro+da+Fuma%C3%A7a,+SC,+88830-000&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                * Atualize o endereço no mapa com a localização real da clínica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
