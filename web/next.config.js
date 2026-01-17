// ...existing code...
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Oculta o indicador/toolbar de desenvolvimento (botão "N")
  devIndicators: false,
  // Usa export apenas em produção (gera web/out no build)
  ...(process.env.NODE_ENV === 'production'
    ? {
        output: 'export',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {})
};
// ...existing code...
module.exports = nextConfig;
// ...existing code...