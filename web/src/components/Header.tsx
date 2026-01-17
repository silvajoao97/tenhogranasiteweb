import Link from "next/link";
import Logo from "@/components/Logo";
import { AUTH_URL } from "@/config/urls";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/projetos", label: "Funcionalidades" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contato", label: "Contato" },
  { href: "/download", label: "Download" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Ir para a página inicial">
            <Logo className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/10 font-medium"
          >
            Entrar ou Cadastre-se
          </a>
          {/* Menu mobile removido conforme solicitado */}
        </div>
      </div>
    </header>
  );
}
