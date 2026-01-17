Site institucional TenhoGrana — Next.js (React) + Tailwind CSS com foco em responsividade e tema gradiente azul→vermelho.

## Como iniciar

```bash
npm install
npm run dev
```

Abr http://localhost:3000 para ver o site em desenvolvimento.

### Estrutura de páginas
- Home: `src/app/page.tsx`
- Quem Somos: `src/app/quem-somos/page.tsx`
- Projetos: `src/app/projetos/page.tsx`
- Empresa: `src/app/empresa/page.tsx`
- Contato: `src/app/contato/page.tsx`
- Download: `src/app/download/page.tsx`

## Customização
- Header/Footer e tema gradiente: integrados em `src/app/layout.tsx`.
- Componentes: `src/components/*` (`Header`, `Footer`, `GradientBackground`, `Section`, `FeatureCard`, `DownloadButtons`).
- Substitua os links dos botões de download em `DownloadButtons.tsx` pelos links oficiais.
- Substitua `public/logo.svg` pelo seu logo oficial.

## Build e Deploy

```bash
npm run build
npm run start
```

