"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const WA = "https://wa.me/5548996710980?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20meu%20pet.";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/agendamento", label: "Agendamento" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="Sensipet Centro Veterinário" width={200} height={66} className="h-14 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary-600 text-white text-center px-5 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
