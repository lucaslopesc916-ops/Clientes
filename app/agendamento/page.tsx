"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  tipoAnimal: string;
  servico: string;
  data: string;
  horario: string;
  observacoes: string;
};

const servicos = [
  "Consulta Clínica",
  "Vacinação",
  "Cirurgia",
  "Exames Laboratoriais",
  "Emergência",
  "Cardiologia",
  "Ortopedia",
  "Oftalmologia",
  "Dermatologia",
  "Ultrassonografia",
  "Outro",
];

const horarios = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export default function AgendamentoPage() {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta na Sensipet.\n\n` +
      `*Nome:* ${data.nome}\n` +
      `*E-mail:* ${data.email}\n` +
      `*Telefone:* ${data.telefone}\n` +
      `*Animal:* ${data.tipoAnimal}\n` +
      `*Serviço:* ${data.servico}\n` +
      `*Data:* ${data.data}\n` +
      `*Horário:* ${data.horario}\n` +
      (data.observacoes ? `*Observações:* ${data.observacoes}` : "")
    );
    window.open(`https://wa.me/5534988213494?text=${msg}`, "_blank");
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitação enviada!</h2>
          <p className="text-gray-500 mb-6">
            Você foi redirecionado para o WhatsApp. Nossa equipe confirmará seu agendamento em breve.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            Novo agendamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-3">Agende sua Consulta</h1>
        <p className="text-primary-100 text-lg">
          Preencha o formulário e entraremos em contato pelo WhatsApp para confirmar.
        </p>
      </div>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
          >
            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nome completo *
              </label>
              <input
                {...register("nome", { required: "Nome é obrigatório" })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                placeholder="Seu nome"
              />
              {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
            </div>

            {/* Email + Telefone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail *</label>
                <input
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
                  })}
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Telefone *</label>
                <input
                  {...register("telefone", { required: "Telefone é obrigatório" })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  placeholder="(34) 99999-9999"
                />
                {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
              </div>
            </div>

            {/* Tipo de Animal */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tipo de animal *
              </label>
              <select
                {...register("tipoAnimal", { required: "Selecione o tipo de animal" })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white"
              >
                <option value="">Selecione...</option>
                <option>Cão</option>
                <option>Gato</option>
                <option>Ave</option>
                <option>Coelho</option>
                <option>Réptil</option>
                <option>Outro</option>
              </select>
              {errors.tipoAnimal && <p className="text-red-500 text-xs mt-1">{errors.tipoAnimal.message}</p>}
            </div>

            {/* Serviço */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Serviço *</label>
              <select
                {...register("servico", { required: "Selecione o serviço" })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white"
              >
                <option value="">Selecione...</option>
                {servicos.map((s) => <option key={s}>{s}</option>)}
              </select>
              {errors.servico && <p className="text-red-500 text-xs mt-1">{errors.servico.message}</p>}
            </div>

            {/* Data + Horário */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Data preferida *</label>
                <input
                  {...register("data", { required: "Data é obrigatória" })}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                {errors.data && <p className="text-red-500 text-xs mt-1">{errors.data.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Horário preferido *</label>
                <select
                  {...register("horario", { required: "Horário é obrigatório" })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white"
                >
                  <option value="">Selecione...</option>
                  {horarios.map((h) => <option key={h}>{h}</option>)}
                </select>
                {errors.horario && <p className="text-red-500 text-xs mt-1">{errors.horario.message}</p>}
              </div>
            </div>

            {/* Observações */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Observações (opcional)
              </label>
              <textarea
                {...register("observacoes")}
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm resize-none"
                placeholder="Descreva o motivo da consulta ou informações adicionais..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
            >
              Solicitar Agendamento via WhatsApp
            </button>

            <p className="text-xs text-gray-400 text-center">
              Ao enviar, você será redirecionado para o WhatsApp para confirmar o agendamento.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
