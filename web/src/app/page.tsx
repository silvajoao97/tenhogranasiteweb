import DownloadButtons from "@/components/DownloadButtons";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import WebCTA from "@/components/WebCTA";

export default function Home() {
  return (
    <>
      <section className="pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Controle financeiro simples, moderno e poderoso.
            </h1>
            <p className="text-white/85 text-lg max-w-2xl">
              Tenha clareza total sobre seus gastos, metas e relatórios com uma experiência pensada para computador e celular.
            </p>
            <WebCTA />
            <DownloadButtons />
          </div>
        </div>
      </section>
      <Section
        title="Por que TenhoGrana?"
        description="Funcionalidades que elevam sua organização financeira."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Controle de gastos"
            text="Registre e categorize todas as suas despesas de forma rápida e intuitiva. Tenha visibilidade total de para onde seu dinheiro está indo."
            icon={
              (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 10h3v4h-3a3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" fill="currentColor" opacity="0.25" />
                  <circle cx="8" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              )
            }
          />
          <FeatureCard
            title="Sincronização em Tempo Real"
            text="Acesse suas informações de qualquer dispositivo. Sincronização automática e instantânea entre todos os seus aparelhos."
            icon={
              (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 13a6 6 0 0 1 10.39-3.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 11v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 7h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 11a6 6 0 0 1-10.39 3.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 15v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          />
          <FeatureCard
            title="Segurança de Dados"
            text="Seus dados financeiros protegidos com criptografia de ponta a ponta. Privacidade e segurança são nossas prioridades."
            icon={
              (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" stroke="currentColor" strokeWidth="2" />
                  <rect x="9" y="10" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 10V8a2 2 0 0 1 2-2h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )
            }
          />
          <FeatureCard
            title="Integração com IA"
            text="Automatizações e recomendações inteligentes — Em breve."
            icon={
              (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 12a3 3 0 1 0 6 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              )
            }
          />
        </div>
      </Section>
    </>
  );
}
