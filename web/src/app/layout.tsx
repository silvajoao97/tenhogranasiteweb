import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TenhoGrana — Controle financeiro moderno",
    template: "%s — TenhoGrana",
  },
  description:
    "Site oficial do TenhoGrana: funcionalidades, empresa, quem somos e download do app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}>
        <GradientBackground>
          <Header />
          <main>{children}</main>
          <Footer />
        </GradientBackground>
      </body>
    </html>
  );
}
