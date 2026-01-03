import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[var(--color-primary)] p-6">
      
      {/* LOGO */}
      <div className="flex items-center justify-center mb-10">
        <Image
          src="/assets/logo-marine-white.png"
          alt="Marinha"
          width={160}
          height={40}
          priority
        />
      </div>

      {/* MENU */}
      <nav className="space-y-4">
        <a className="block hover:opacity-80 text-[var(--color-white)]" href="#">
          Inicio
        </a>
        <a className="block hover:opacity-80 text-[var(--color-white)]" href="#">
          Relatórios
        </a>
        <a className="block hover:opacity-80 text-[var(--color-white)]" href="#">
          Configurações
        </a>
      </nav>
    </aside>
  );
}
