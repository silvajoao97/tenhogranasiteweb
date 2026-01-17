import { TERMS_PRIVACY_URL } from "@/config/urls";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white/70 text-sm">
              Uma marca da Empresa
              {" "}
              <Link href="/empresa" className="hover:text-white underline underline-offset-4">
                Dunovatec - Duarte Inovações Tecnológicas LTDA
              </Link>
              .
            </p>
            <p className="text-white/70 text-sm mt-1">© {new Date().getFullYear()} TenhoGrana. Todos os direitos reservados.</p>
          </div>
          <div className="text-white/80 text-sm flex gap-4">
            <a href={TERMS_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Termos</a>
            <a href={TERMS_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
