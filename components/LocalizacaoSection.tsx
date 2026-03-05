import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Sensipet.";

export default function LocalizacaoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Onde estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Estamos prontos para atender você e seu pet
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80">
            <iframe
              src="https://maps.google.com/maps?q=Av.+Inocente+Pagnan,+201,+Centro,+Morro+da+Fuma%C3%A7a,+SC,+88830-000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sensipet"
            />
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex gap-4 items-start">
              <div className="bg-primary-600 p-3 rounded-xl shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                <p className="text-gray-700 text-sm font-medium">Av. Inocente Pagnan, 201 - Centro</p>
                <p className="text-gray-500 text-sm">Morro da Fumaça – SC, 88830-000</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex gap-4 items-start">
              <div className="bg-primary-600 p-3 rounded-xl shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Horário de atendimento</h4>
                <p className="text-gray-600 text-sm">Segunda a sexta: <span className="font-semibold text-primary-700">08h às 22h</span></p>
                <p className="text-gray-600 text-sm">Sábado: <span className="font-semibold text-primary-700">08h às 12h</span></p>
                <p className="text-primary-600 text-sm font-medium mt-1">Plantão conforme disponibilidade</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex gap-4 items-start">
              <div className="bg-primary-600 p-3 rounded-xl shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</h4>
                <a
                  href="https://wa.me/5548996710980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  (48) 99671-0980
                </a>
              </div>
            </div>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors w-full shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
