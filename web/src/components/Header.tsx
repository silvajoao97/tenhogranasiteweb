"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import { AUTH_URL } from "@/config/urls";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Início" },
	{ href: "/quem-somos", label: "Quem Somos" },
	{ href: "/projetos", label: "Funcionalidades" },
	{ href: "/empresa", label: "Empresa" },
	{ href: "/contato", label: "Contato" },
	{ href: "/download", label: "Download" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
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
						Entre ou Cadastre-se
					</a>
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						aria-label="Abrir menu"
						className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
							<path fillRule="evenodd" d="M3.75 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75z" clipRule="evenodd" />
						</svg>
					</button>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t border-white/10 bg-white/5">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="block w-full text-white/90 hover:text-white transition-colors text-base font-medium px-3 py-2 rounded-md hover:bg-white/10"
							>
								{item.label}
							</Link>
						))}
						<a
							href={AUTH_URL}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
							className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/10 font-medium"
						>
							Entre ou Cadastre-se
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

