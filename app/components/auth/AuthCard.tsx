import Image from "next/image";

export default function AuthCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md bg-[var(--color-white)] rounded-xl shadow-lg p-8">
      
      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <Image
          src="/assets/logo-marine.png"
          alt="Marinha"
          width={160}
          height={40}
          priority
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6 text-[var(--color-primary)]">
        {title}
      </h1>

      {children}
    </div>
  );
}
