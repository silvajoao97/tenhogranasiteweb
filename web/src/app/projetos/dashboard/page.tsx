import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPreviewPage() {
  return (
    <Section
      title="Dashboard do Sistema"
      description="Visualização do painel financeiro conforme imagem anexada."
    >
      <div className="mb-6">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <span>← Voltar para Funcionalidades</span>
        </Link>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
        <Image
          src="/projetos/dashboard.png"
          alt="Preview do Dashboard Financeiro"
          width={1561}
          height={768}
          className="w-full h-auto"
          unoptimized
          priority
        />
      </div>
    </Section>
  );
}
