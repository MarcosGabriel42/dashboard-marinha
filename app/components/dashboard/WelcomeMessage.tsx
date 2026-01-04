"use client";

import { useEffect, useState } from "react";

interface Usuario {
  nome: string;
  apelido?: string;
  cargo: string;
}

export default function WelcomeMessage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      Promise.resolve().then(() => setUsuario(JSON.parse(usuarioSalvo)));
    }
  }, []);

  if (!usuario) return null;

  const nomeExibido = usuario.apelido || usuario.nome;

  return (
    <h1 className="text-2xl font-bold text-primary">
      Bem-vindo, {usuario.cargo} {nomeExibido}! 
    </h1>
  );
}
