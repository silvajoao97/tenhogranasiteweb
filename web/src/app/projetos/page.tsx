import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export default function Page() {
  return (
    <Section title="Funcionalidades" description="Algumas iniciativas e funcionalidades-chave.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard title="Dashboard Inteligente" text="Análises em tempo real para decisões melhores." href="/projetos/dashboard" />
        <FeatureCard title="Cadastro de Gastos e Categorias" text="Registre despesas e organize por categorias customizadas." />
        <FeatureCard title="Suporte" text="Atendimento para dúvidas e ajuda com o sistema." href="/contato" />
        <FeatureCard title="Dashboard com Visão Histórica (mês a mês)" text="Acompanhe indicadores e evolução mensal em gráficos." />
        <FeatureCard title="Histórico de Pagamentos" text="Veja e filtre pagamentos com datas e status." />
        <FeatureCard title="Integração com IA" text="Sugestões inteligentes e automações — Em breve." />
      </div>
    </Section>
  );
}
