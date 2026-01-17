"use client";
import { ANDROID_URL, IOS_URL } from "@/config/urls";

export default function DownloadButtons() {
  const comingSoon = true;
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black/60 hover:bg-black/70 text-white border border-white/10 ${comingSoon ? "opacity-60 cursor-not-allowed hover:bg-black/60" : ""}`}
        aria-label="Baixar Android"
        aria-disabled={comingSoon}
        title={comingSoon ? "Disponível em breve" : undefined}
        onClick={(e) => {
          if (comingSoon) e.preventDefault();
        }}
      >
        {/* Ícone Android estilizado (genérico) */}
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
          <rect x="6" y="8" width="12" height="9" rx="2" fill="currentColor" />
          <rect x="5" y="11" width="2" height="5" rx="1" fill="currentColor" />
          <rect x="17" y="11" width="2" height="5" rx="1" fill="currentColor" />
          <rect x="9" y="17" width="2" height="3" rx="1" fill="currentColor" />
          <rect x="13" y="17" width="2" height="3" rx="1" fill="currentColor" />
          <rect x="8" y="6" width="8" height="2" rx="1" fill="currentColor" />
          <circle cx="10" cy="10" r="1" fill="#0F172A" />
          <circle cx="14" cy="10" r="1" fill="#0F172A" />
          <path d="M8 6 L6.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 6 L17.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-medium">Android</span>
        {comingSoon && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 border border-white/10">Em breve</span>
        )}
      </a>
      <a
        href={IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/10 ${comingSoon ? "opacity-60 cursor-not-allowed hover:bg-white/20" : ""}`}
        aria-label="Baixar iOS"
        aria-disabled={comingSoon}
        title={comingSoon ? "Disponível em breve" : undefined}
        onClick={(e) => {
          if (comingSoon) e.preventDefault();
        }}
      >
        {/* Ícone iOS estilizado (genérico) */}
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M14.5 5.5c1.1-.8 2.1-.9 2.7-.9-.2.9-.7 1.7-1.4 2.3-.6.5-1.3.8-2 .9-.7.1-1.5 0-2.2-.3.2-.9.7-1.5 1.5-2 0 0 .9-.5 1.4-.6z" fill="currentColor" />
          <path d="M12 8c-3 0-5 2.3-5 5.1 0 2.6 1.7 4.9 3.9 4.9 1 0 1.7-.4 2.3-.4.6 0 1.3.4 2.3.4 2.2 0 3.9-2.3 3.9-4.9 0-1.8-.9-3.4-2.2-4.2-.7-.5-1.6-.8-2.5-.8-.9 0-1.6.3-2.7.3-1.1 0-1.6-.4-2-.4z" fill="currentColor" />
          <path d="M16.2 4.3c.2-.5.5-.9.9-1.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-medium">iOS</span>
        {comingSoon && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 border border-white/10">Em breve</span>
        )}
      </a>
    </div>
  );
}
