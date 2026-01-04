"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "../components/auth/AuthCard";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // ETAPA 1
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cargo, setCargo] = useState("");

  // ETAPA 2
  const [temAkuma, setTemAkuma] = useState(false);
  const [tipoAkuma, setTipoAkuma] = useState("");
  const [descricaoAkuma, setDescricaoAkuma] = useState("");
  const [hakis, setHakis] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function gerarEmail(base: string) {
    const emailBase = base.toLowerCase().replace(/\s/g, ".");
    setEmail(`${emailBase}@marine.com`);
  }

  function toggleHaki(haki: string) {
    setHakis((prev) =>
      prev.includes(haki)
        ? prev.filter((h) => h !== haki)
        : [...prev, haki]
    );
  }

  function nextStep() {
    if (!nome || !cpf || !nascimento || !cargo) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    gerarEmail(apelido || nome);
    setStep(2);
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    localStorage.setItem(
      "usuario",
      JSON.stringify({
        nome,
        apelido,
        cpf,
        nascimento,
        cargo,
        email,
        hakis,
        temAkuma,
        tipoAkuma,
        descricaoAkuma,
      })
    );

    alert("Cadastro realizado com sucesso! Faça login para continuar.");
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]">
      <AuthCard title="Cadastro na Marinha">

        {/* INDICADOR DE ETAPA */}
        <div className="flex justify-center mb-6 gap-2">
          <div className={`w-3 h-3 rounded-full ${step === 1 ? "bg-[var(--color-primary)]" : "bg-gray-300"}`} />
          <div className={`w-3 h-3 rounded-full ${step === 2 ? "bg-[var(--color-primary)]" : "bg-gray-300"}`} />
        </div>

        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <input
              placeholder="Nome completo"
              className="w-full p-3 border rounded-lg text-black"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              placeholder="Apelido (opcional)"
              className="w-full p-3 border rounded-lg text-black"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />

            <input
            placeholder="CPF"
            className="w-full p-3 border rounded-lg text-black"
            value={cpf}
            maxLength={11}
            onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setCpf(value);
            }}
            />

            <input
              type="date"
              className="w-full p-3 border rounded-lg text-black"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />

            <select
              className="w-full p-3 border rounded-lg text-black"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            >
              <option value="">Selecione o cargo</option>
              <option>Almirante da Frota</option>
              <option>Almirante</option>
              <option>Vice-Almirante</option>
              <option>Inspetor-Geral</option>
              <option>Diretor de Investigação</option>
            </select>

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-[var(--color-primary)] text-white p-3 rounded-lg font-semibold"
            >
              Continuar
            </button>
          </div>
        )}

        {/* ETAPA 2 */}
        {step === 2 && (
          <form onSubmit={handleRegister} className="space-y-4">

            <label className="block font-medium">Possui Akuma no Mi?</label>
            <select
              className="w-full p-3 border rounded-lg text-black"
              onChange={(e) => setTemAkuma(e.target.value === "sim")}
            >
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>

            {temAkuma && (
              <>
                <select
                  className="w-full p-3 border rounded-lg text-black"
                  onChange={(e) => setTipoAkuma(e.target.value)}
                >
                  <option value="">Tipo da Akuma no Mi</option>
                  <option>Paramecia</option>
                  <option>Zoan</option>
                  <option>Logia</option>
                </select>

                <textarea
                  placeholder="Descrição da habilidade"
                  className="w-full p-3 border rounded-lg text-black"
                  onChange={(e) => setDescricaoAkuma(e.target.value)}
                />
              </>
            )}

            <div>
              <p className="font-medium mb-2">Conhecimento em Haki</p>
              {["Armamento", "Observação", "Conquistador"].map((haki) => (
                <label key={haki} className="block">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => toggleHaki(haki)}
                  />
                  {haki}
                </label>
              ))}
            </div>

            {/* EMAIL EDITÁVEL */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@marine.com"
              className="w-full p-3 border rounded-lg text-black"
              required
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full p-3 border rounded-lg text-black"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              className="w-full p-3 border rounded-lg text-black"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white p-3 rounded-lg font-semibold"
            >
              Finalizar Cadastro
            </button>
          </form>
        )}

      </AuthCard>
    </div>
  );
}
