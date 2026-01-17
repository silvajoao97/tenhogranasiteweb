import Section from "@/components/Section";

export default function Page() {
  return (
    <Section title="Contato" description="Fale conosco.">
      <form className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60" placeholder="Nome" />
        <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60" placeholder="Email" type="email" />
        <textarea className="sm:col-span-2 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60" placeholder="Mensagem" rows={4} />
        <button className="sm:col-span-2 px-5 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/10 font-medium">Enviar</button>
      </form>
    </Section>
  );
}
