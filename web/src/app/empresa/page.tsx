import Section from "@/components/Section";

export default function Page() {
  return (
    <Section title="Empresa" description="Informações institucionais e de contato comercial.">
      <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-6">
        <div className="space-y-2 text-sm">
          <p className="text-white/90"><span className="text-white/70">Empresa:</span> Duarte Inovações Tecnológicas Ltda.</p>
          <p className="text-white/90"><span className="text-white/70">CNPJ:</span> 63.613.258/0001-83</p>
          <p className="text-white/90"><span className="text-white/70">Endereço:</span> Rua Pais Leme, 215, Conj. 1713, Pinheiros, São Paulo/SP – CEP 05424-150</p>
        </div>
      </div>
    </Section>
  );
}
