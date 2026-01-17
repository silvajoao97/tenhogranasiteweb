import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta o indicador/toolbar de desenvolvimento (botão "N")
  devIndicators: false,
  // Gera site estático (html/css/js em web/out)
  output: "export",
};

export default nextConfig;
