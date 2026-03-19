"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const animais = [
  { valor: "Cão", emoji: "🐕" },
  { valor: "Gato", emoji: "🐈" },
  { valor: "Ave", emoji: "🦜" },
  { valor: "Coelho", emoji: "🐇" },
  { valor: "Réptil", emoji: "🦎" },
  { valor: "Outro", emoji: "🐾" },
];

const servicos = [
  { valor: "Consulta Clínica", emoji: "🩺" },
  { valor: "Vacinação", emoji: "💉" },
  { valor: "Cirurgia", emoji: "🔬" },
  { valor: "Exames Laboratoriais", emoji: "🧪" },
  { valor: "Emergência", emoji: "🚨" },
  { valor: "Cardiologia", emoji: "❤️" },
  { valor: "Ortopedia", emoji: "🦴" },
  { valor: "Oftalmologia", emoji: "👁️" },
  { valor: "Dermatologia", emoji: "🌿" },
  { valor: "Ultrassonografia", emoji: "📡" },
  { valor: "Banho & Tosa", emoji: "✂️" },
  { valor: "Outro", emoji: "➕" },
];

const horarios = [
  "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const hoje = new Date().toISOString().split("T")[0];

/* ─── Types ─────────────────────────────────────────────── */

type Dados = {
  nome: string;
  animal: string;
  servico: string;
  data: string;
  horario: string;
  telefone: string;
  observacoes: string;
};

/* ─── Step definitions ──────────────────────────────────── */

type StepId =
  | "welcome"
  | "nome"
  | "animal"
  | "servico"
  | "data"
  | "horario"
  | "telefone"
  | "observacoes"
  | "sucesso";

interface Step {
  id: StepId;
  numero?: number;
  total?: number;
}

const STEPS: Step[] = [
  { id: "welcome" },
  { id: "nome",        numero: 1, total: 7 },
  { id: "animal",      numero: 2, total: 7 },
  { id: "servico",     numero: 3, total: 7 },
  { id: "data",        numero: 4, total: 7 },
  { id: "horario",     numero: 5, total: 7 },
  { id: "telefone",    numero: 6, total: 7 },
  { id: "observacoes", numero: 7, total: 7 },
  { id: "sucesso" },
];

/* ─── Main component ────────────────────────────────────── */

export default function AgendamentoPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [animDir, setAnimDir] = useState<"up" | "down">("up");
  const [visible, setVisible] = useState(true);
  const [dados, setDados] = useState<Dados>({
    nome: "", animal: "", servico: "",
    data: "", horario: "", telefone: "", observacoes: "",
  });
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const step = STEPS[stepIndex];
  const progresso = step.numero ? (step.numero / (step.total ?? 7)) * 100 : 0;

  /* animate transition */
  const goTo = useCallback((nextIndex: number, dir: "up" | "down" = "up") => {
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setStepIndex(nextIndex);
      setVisible(true);
    }, 280);
  }, []);

  const avancar = useCallback(() => {
    if (stepIndex < STEPS.length - 1) goTo(stepIndex + 1, "up");
  }, [stepIndex, goTo]);

  const voltar = useCallback(() => {
    if (stepIndex > 1) goTo(stepIndex - 1, "down");
  }, [stepIndex, goTo]);

  /* auto-focus inputs */
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  /* keyboard Enter to advance */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step.id !== "observacoes") {
        e.preventDefault();
        const valido = podeAvancar();
        if (valido) avancar();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex, dados, step.id]);

  function podeAvancar(): boolean {
    switch (step.id) {
      case "nome":        return dados.nome.trim().length > 1;
      case "animal":      return !!dados.animal;
      case "servico":     return !!dados.servico;
      case "data":        return !!dados.data;
      case "horario":     return !!dados.horario;
      case "telefone":    return dados.telefone.replace(/\D/g, "").length >= 10;
      default:            return true;
    }
  }

  function enviarWhatsApp() {
    const msg = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta na Sensipet.\n\n` +
      `*Nome:* ${dados.nome}\n` +
      `*Animal:* ${dados.animal}\n` +
      `*Serviço:* ${dados.servico}\n` +
      `*Data:* ${dados.data}\n` +
      `*Horário:* ${dados.horario}\n` +
      `*Telefone:* ${dados.telefone}\n` +
      (dados.observacoes ? `*Observações:* ${dados.observacoes}` : "")
    );
    window.open(`https://wa.me/5548996710980?text=${msg}`, "_blank");
    goTo(STEPS.length - 1, "up");
  }

  /* ─── Animation classes ─────────────────────────────── */

  const anim = visible
    ? "opacity-100 translate-y-0"
    : animDir === "up"
    ? "opacity-0 translate-y-6"
    : "opacity-0 -translate-y-6";

  /* ─── Render ────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Progress bar */}
      {step.numero && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary-100">
          <div
            className="h-full bg-primary-600 transition-all duration-500 ease-out"
            style={{ width: `${progresso}%` }}
          />
        </div>
      )}

      {/* Back button */}
      {stepIndex > 1 && step.id !== "sucesso" && (
        <button
          onClick={voltar}
          className="fixed top-4 left-4 z-50 p-2 rounded-full hover:bg-primary-100 transition-colors text-primary-700"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {/* Step counter */}
      {step.numero && (
        <div className="fixed top-4 right-4 z-50 text-xs font-semibold text-primary-500">
          {step.numero} / {step.total}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div
          className={`w-full max-w-xl transition-all duration-300 ease-out ${anim}`}
        >
          {/* ── Welcome ── */}
          {step.id === "welcome" && (
            <div className="text-center">
              <p className="text-5xl mb-6">🐾</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-800 mb-4 leading-tight">
                Agende a consulta<br />do seu pet
              </h1>
              <p className="text-primary-600 mb-8 text-lg">
                Leva menos de 2 minutos. No final, você vai direto para o WhatsApp para confirmar.
              </p>
              <button
                onClick={() => goTo(1, "up")}
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 active:scale-95 transition-all shadow-md"
              >
                Começar <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* ── Nome ── */}
          {step.id === "nome" && (
            <div>
              <Label numero={1}>Qual é o seu nome?</Label>
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                value={dados.nome}
                onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                placeholder="Digite seu nome..."
                className="w-full bg-transparent border-b-2 border-primary-300 focus:border-primary-600 outline-none text-2xl text-primary-900 py-3 placeholder-primary-200 transition-colors"
              />
              <BotaoAvancar disabled={!podeAvancar()} onClick={avancar} />
            </div>
          )}

          {/* ── Animal ── */}
          {step.id === "animal" && (
            <div>
              <Label numero={2}>Qual é o tipo do seu animal?</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {animais.map((a) => (
                  <button
                    key={a.valor}
                    onClick={() => {
                      setDados({ ...dados, animal: a.valor });
                      setTimeout(avancar, 200);
                    }}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 font-semibold text-left transition-all active:scale-95
                      ${dados.animal === a.valor
                        ? "border-primary-600 bg-primary-50 text-primary-800"
                        : "border-primary-100 bg-white text-primary-700 hover:border-primary-300"
                      }`}
                  >
                    <span className="text-2xl">{a.emoji}</span>
                    <span>{a.valor}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Serviço ── */}
          {step.id === "servico" && (
            <div>
              <Label numero={3}>Qual serviço você precisa?</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-h-[60vh] overflow-y-auto pr-1">
                {servicos.map((s) => (
                  <button
                    key={s.valor}
                    onClick={() => {
                      setDados({ ...dados, servico: s.valor });
                      setTimeout(avancar, 200);
                    }}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 font-semibold text-left transition-all active:scale-95
                      ${dados.servico === s.valor
                        ? "border-primary-600 bg-primary-50 text-primary-800"
                        : "border-primary-100 bg-white text-primary-700 hover:border-primary-300"
                      }`}
                  >
                    <span className="text-xl">{s.emoji}</span>
                    <span className="text-sm">{s.valor}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Data ── */}
          {step.id === "data" && (
            <div>
              <Label numero={4}>Qual data você prefere?</Label>
              <div className="relative mt-6">
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="date"
                  value={dados.data}
                  min={hoje}
                  onChange={(e) => setDados({ ...dados, data: e.target.value })}
                  className="w-full bg-white border-2 border-primary-200 focus:border-primary-600 outline-none text-xl text-primary-900 px-5 py-4 rounded-2xl transition-colors appearance-none"
                />
              </div>
              <BotaoAvancar disabled={!podeAvancar()} onClick={avancar} />
            </div>
          )}

          {/* ── Horário ── */}
          {step.id === "horario" && (
            <div>
              <Label numero={5}>Que horário funciona melhor?</Label>
              <div className="grid grid-cols-4 gap-2 mt-6">
                {horarios.map((h) => (
                  <button
                    key={h}
                    onClick={() => {
                      setDados({ ...dados, horario: h });
                      setTimeout(avancar, 200);
                    }}
                    className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all active:scale-95
                      ${dados.horario === h
                        ? "border-primary-600 bg-primary-600 text-white"
                        : "border-primary-100 bg-white text-primary-700 hover:border-primary-300"
                      }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Telefone ── */}
          {step.id === "telefone" && (
            <div>
              <Label numero={6}>Qual o seu WhatsApp?</Label>
              <p className="text-primary-500 mb-6 text-sm">Vamos confirmar seu agendamento por lá.</p>
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type="tel"
                value={dados.telefone}
                onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                placeholder="(34) 99999-9999"
                className="w-full bg-transparent border-b-2 border-primary-300 focus:border-primary-600 outline-none text-2xl text-primary-900 py-3 placeholder-primary-200 transition-colors"
              />
              <BotaoAvancar disabled={!podeAvancar()} onClick={avancar} />
            </div>
          )}

          {/* ── Observações ── */}
          {step.id === "observacoes" && (
            <div>
              <Label numero={7}>Alguma observação? <span className="text-primary-400 font-normal text-base">(opcional)</span></Label>
              <p className="text-primary-500 mb-6 text-sm">Sintomas, histórico ou qualquer detalhe importante.</p>
              <textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={dados.observacoes}
                onChange={(e) => setDados({ ...dados, observacoes: e.target.value })}
                placeholder="Escreva aqui..."
                rows={4}
                className="w-full bg-white border-2 border-primary-200 focus:border-primary-600 outline-none text-lg text-primary-900 px-5 py-4 rounded-2xl resize-none placeholder-primary-200 transition-colors"
              />
              <button
                onClick={enviarWhatsApp}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 active:scale-95 transition-all shadow-md"
              >
                Confirmar pelo WhatsApp <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-primary-400 text-center mt-3">
                Você será redirecionado para o WhatsApp para confirmar.
              </p>
            </div>
          )}

          {/* ── Sucesso ── */}
          {step.id === "sucesso" && (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-5" />
              <h2 className="text-3xl font-extrabold text-primary-800 mb-3">Perfeito, {dados.nome.split(" ")[0]}!</h2>
              <p className="text-primary-600 text-lg mb-8">
                Você foi redirecionado para o WhatsApp. Nossa equipe vai confirmar o agendamento do seu {dados.animal?.toLowerCase()}.
              </p>
              <button
                onClick={() => {
                  setDados({ nome: "", animal: "", servico: "", data: "", horario: "", telefone: "", observacoes: "" });
                  goTo(0, "down");
                }}
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 px-6 py-3 rounded-2xl font-semibold hover:bg-primary-50 active:scale-95 transition-all"
              >
                Novo agendamento
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll hint for card steps */}
      {(step.id === "servico") && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs text-primary-400 animate-bounce pointer-events-none">
          <ChevronDown className="w-4 h-4" /> role para ver mais
        </div>
      )}
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────── */

function Label({ numero, children }: { numero: number; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">{numero}</span>
      <ArrowRight className="inline w-3 h-3 text-primary-400 mx-1 mb-0.5" />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 mt-1 leading-snug">{children}</h2>
    </div>
  );
}

function BotaoAvancar({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  return (
    <div className="mt-8 flex items-center gap-3">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95
          ${disabled
            ? "bg-primary-100 text-primary-300 cursor-not-allowed"
            : "bg-primary-600 text-white hover:bg-primary-700 shadow-md"
          }`}
      >
        OK <ArrowRight className="w-4 h-4" />
      </button>
      <span className="text-xs text-primary-400">ou pressione <kbd className="bg-primary-100 text-primary-600 px-1.5 py-0.5 rounded font-mono">Enter</kbd></span>
    </div>
  );
}
