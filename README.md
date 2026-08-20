# Rota Aberta — Portal de Viagens

Projeto de estudo em **Next.js (App Router)** que simula um pequeno portal de
viagens: uma listagem de destinos turísticos e páginas de detalhe geradas por
rota dinâmica.

🔗 **Deploy:** [portal-viagens-indol.vercel.app](https://portal-viagens-indol.vercel.app)

![CI/CD](https://github.com/thiagoasoares-byte/portal-viagens/actions/workflows/main.yml/badge.svg)

## Conceitos aplicados

- **Rotas baseadas em arquivos** (App Router): `/`, `/destinos`
- **Rotas dinâmicas**: `/destinos/[id]`, com `generateStaticParams` para
  gerar as páginas de todos os destinos de forma estática (SSG) e uma página
  `not-found` customizada para ids inexistentes
- **Componentização**: `Layout`, `Header`, `Footer` e `CardDestino`
- **CSS Modules** em todos os componentes e páginas, sem nenhuma dependência
  de UI externa
- **`next/image`** com `remotePatterns` configurado para otimizar as imagens
- **`next/font/google`**: Fraunces (títulos), IBM Plex Sans (corpo de texto)
  e IBM Plex Mono (rótulos/carimbos)

## Estrutura de pastas

```
src/
  app/
    layout.tsx            # layout raiz (fontes + <Layout>)
    page.tsx               # página inicial
    page.module.css
    globals.css             # tokens de cor/tipografia
    destinos/
      page.tsx              # listagem de destinos
      destinos.module.css
      [id]/
        page.tsx             # detalhe do destino (rota dinâmica)
        destino.module.css
        not-found.tsx        # 404 customizado para destino inexistente
        not-found.module.css
  components/
    Layout/                # header + footer + <main>
    Header/                # menu de navegação (next/link)
    Footer/
    CardDestino/            # card usado na listagem
  data/
    destinos.ts             # array local simulando os dados (id, nome, imagem, descricao...)
```

## Identidade visual

O projeto usa uma linguagem visual inspirada em **passaportes e cartões de
embarque**: cards de destino como pequenos "carimbos" de viagem, cabeçalho
com borda picotada (perfuração de bilhete) e paleta em tom de papel, tinta
naval, verde-jade e dourado.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Testes

```bash
npm run test
```

Testes escritos com **Vitest** + **Testing Library**, cobrindo a integridade
dos dados de destinos (`src/data/destinos.test.ts`) e a renderização do
componente `Header` (`src/components/Header/Header.test.tsx`).

## CI/CD

O projeto usa **GitHub Actions** (`.github/workflows/main.yml`) com dois jobs:

1. **CI** — roda em todo push e pull request para `main`:
   - `npm ci` (instala dependências)
   - `npm run lint` (ESLint)
   - `npm run test` (Vitest)
   - `npm run build` (build de produção do Next.js)
2. **CD** — roda apenas após o CI passar em um push direto na `main`:
   - Publica automaticamente o build na **Vercel** (produção), usando a
     Vercel CLI de forma não-interativa via os secrets do repositório.

### Secrets necessários (Settings → Secrets and variables → Actions)

| Secret              | Onde encontrar                                                                 |
| ------------------- | ------------------------------------------------------------------------------- |
| `VERCEL_TOKEN`      | vercel.com → Settings → Tokens                                                  |
| `VERCEL_ORG_ID`     | Gerado em `.vercel/project.json` após rodar `vercel link` localmente uma vez    |
| `VERCEL_PROJECT_ID` | Gerado em `.vercel/project.json` após rodar `vercel link` localmente uma vez    |

## Autor

Thiago Alves Soares
