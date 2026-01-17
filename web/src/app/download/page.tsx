import Section from "@/components/Section";
import DownloadButtons from "@/components/DownloadButtons";
import WebCTA from "@/components/WebCTA";

export default function Page() {
  return (
    <Section title="Download" description="Baixe nosso app para Android e iOS.">
      <div className="mb-4">
        <WebCTA />
      </div>
      <DownloadButtons />
      <p className="text-white/70 text-xs mt-3">Links temporários — substitua pelos links oficiais das lojas.</p>
    </Section>
  );
}
