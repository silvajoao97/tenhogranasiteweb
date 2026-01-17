import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta o indicador/toolbar de desenvolvimento (botão "N")
  devIndicators: false,
  // Gera build "standalone" para artefato enxuto (copia apenas .next/standalone, .next/static e public)
  output: "standalone",
};

export default nextConfig;
