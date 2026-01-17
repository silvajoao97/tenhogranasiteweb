import { WEB_APP_URL } from "@/config/urls";

export default function WebCTA() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-red-500/40">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/20 border border-white/10 text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M9 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-white font-semibold">Versão Web completa</p>
              <p className="text-white/80 text-sm">Use no computador com experiência fluida e segura.</p>
            </div>
          </div>
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/10 font-medium"
          >
            Acessar Sistema Web
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17l10-10M17 7H7m10 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
