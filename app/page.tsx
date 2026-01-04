"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "./components/layout/DashboardLayout";
import Card from "./components/ui/Card";
import WelcomeMessage from "./components/dashboard/WelcomeMessage";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const logado = localStorage.getItem("logado");
    if (!logado) {
      router.push("/login");
    }
  }, [router]);

  return (
    <DashboardLayout>
      {/* Mensagem dinâmica de boas-vindas */}
      <WelcomeMessage />

      {/* Cards do dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card title="Embarcações" value="12" />
        <Card title="Missões" value="4" />
        <Card title="Alertas" value="2" />
      </div>
    </DashboardLayout>
  );
}
