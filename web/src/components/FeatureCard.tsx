import React from "react";
import Link from "next/link";

export default function FeatureCard({ title, text, icon, href }: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  href?: string;
}) {
  const CardContent = (
    <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-6 hover:bg-white/15 transition-colors">
      <div className="flex items-start gap-4">
        <div className="text-white">
          {icon ?? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" opacity="0.2" />
              <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={title} className="block focus:outline-none focus:ring-2 focus:ring-white/30 rounded-xl">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
