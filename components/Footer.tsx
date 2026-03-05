import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-xl p-2 inline-block">
                <Image src="/logo.png" alt="Sensipet Centro Veterinário" width={130} height={44} className="h-11 w-auto" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-300">
              Cuidado veterinário com excelência, tecnologia e muito carinho para o seu pet.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/sensipetcentro/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5548996710980"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/agendamento", label: "Agendamento" },
                { href: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-primary-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-4">Horário</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <div>
                  <div>Seg–Sex: 08h às 22h</div>
                  <div>Sáb: 08h às 12h</div>
                  <div className="text-primary-400 font-medium">Plantão conforme disponibilidade</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-primary-50 font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href="https://wa.me/5548996710980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  (48) 99671-0980
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>Av. Inocente Pagnan, 201 - Centro<br />Morro da Fumaça – SC, 88830-000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800 py-4 text-center text-xs text-primary-400">
        © {new Date().getFullYear()} Sensipet. Todos os direitos reservados.
      </div>
    </footer>
  );
}
