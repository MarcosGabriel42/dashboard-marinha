"use client";

import { useRouter } from "next/navigation";
import AuthCard from "../components/auth/AuthCard";

export default function RegisterPage() {
  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthCard title="Criar Conta">
        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Nome completo"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-[var(--color-white)] p-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Cadastrar
          </button>

          <p className="text-center text-sm">
            Já possui conta?{" "}
            <a href="/login" className="text-[var(--color-primary)] font-medium">
              Entrar
            </a>
          </p>

        </form>
      </AuthCard>
    </div>
  );
}
