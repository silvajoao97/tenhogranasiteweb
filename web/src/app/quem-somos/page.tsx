import Section from "@/components/Section";

export default function Page() {
  return (
    <Section title="Quem Somos" description="Conheça nossa missão e valores.">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-6">
          <h3 className="text-white font-semibold mb-2">Nossa Missão</h3>
          <p className="text-white/80 text-sm">Empoderar pessoas com controle financeiro claro, simples e acessível.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-6">
          <h3 className="text-white font-semibold mb-2">Nossos Valores</h3>
          <p className="text-white/80 text-sm">Transparência, segurança, privacidade e experiência de usuário impecável.</p>
        </div>
      </div>
    </Section>
  );
}
