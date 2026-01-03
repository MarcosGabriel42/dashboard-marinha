"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "./components/layout/DashboardLayout";
import Card from "./components/ui/Card";


export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const logado = localStorage.getItem("logado");
    if (!logado) {
      router.push("/login");
    }
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-[var(--color-primary)]">
        Dashboard Marinha ⚓
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <Card title="Embarcações" value="12" />
        <Card title="Missões" value="4" />
        <Card title="Alertas" value="2" />
      </div>
    </DashboardLayout>
  );
}
