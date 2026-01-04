"use client";

import { useRouter } from "next/navigation";
import AuthCard from "../components/auth/AuthCard";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("logado", "true");
    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthCard title="Acesso ao Sistema">
        <form onSubmit={handleLogin} className="space-y-4">
          
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
            Entrar
          </button>

          <p className="text-center text-sm">
            Não tem conta?{" "}
            <a href="/cadastro" className="text-[var(--color-primary)] font-medium">
              Cadastre-se
            </a>
          </p>

        </form>
      </AuthCard>
    </div>
  );
}
