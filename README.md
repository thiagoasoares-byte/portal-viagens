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

## Performance

Auditoria de performance feita com o Chrome DevTools (Lighthouse), como parte
da atividade prática de otimização web. Metodologia: análise estática do
código (build, ESLint, grep nos CSS Modules pra achar peso/estilo de fonte
realmente usado) + medição no Lighthouse antes e depois das mudanças.

### Gargalos identificados

1. **Fontes carregando variantes não usadas.** `layout.tsx` pedia ao
   `next/font/google` 8 combinações de peso/estilo da Fraunces
   (`400/500/600/700` × `normal/italic`), 3 da IBM Plex Sans
   (`400/500/600`) e 2 da IBM Plex Mono (`400/500`) — 13 arquivos de fonte
   no total. Rodando `grep -rn "font-weight\|font-style" src/**/*.css` e
   cruzando com `font-family` de cada regra, a Fraunces só é usada em
   `600` (normal e itálico, no `<em>` do hero), e tanto a Plex Sans quanto
   a Plex Mono só aparecem no peso `400` (herdado do `body`, sem nenhum
   `font-weight` explícito no projeto inteiro). Ou seja, 9 dos 13 arquivos
   baixados nunca chegam a ser usados na tela — puro peso morto bloqueando
   a renderização do texto.
2. **Sem `display: "swap"` explícito nas fontes**, o que em alguns casos
   deixa o navegador escolhendo o comportamento padrão em vez de garantir
   texto visível (com a fonte de fallback) enquanto a fonte real carrega.
3. **Formato de imagem não priorizava AVIF.** O `next.config.ts` não
   declarava `images.formats`, então o otimizador do Next só considerava
   WebP como alternativa ao formato original. Adicionar AVIF (mais leve
   que WebP na maioria dos casos) como primeira opção reduz o payload de
   imagem sem trocar nada nos componentes.

O que **não** era gargalo (e por isso não foi mexido):

- **JavaScript**: todas as páginas e componentes são Server Components
  (nenhum `"use client"` no projeto), então praticamente nenhum JS de
  interatividade é enviado ao cliente — só o runtime mínimo do Next.
- **Imagens**: já usavam `next/image` com `fill`, `sizes` responsivo e
  lazy loading automático (exceto a imagem de hero da página de detalhe,
  que corretamente usa `priority` por ser o elemento de LCP da rota).
- **CSS/código morto**: `npx eslint .` não acusou nenhum import ou
  variável não utilizados, e uma checagem classe a classe confirmou que
  todas as classes de cada `.module.css` são realmente usadas nos
  componentes correspondentes.

### Melhorias aplicadas

| Melhoria | Onde | Detalhe |
| --- | --- | --- |
| Cortar pesos/estilos de fonte não usados | `src/app/layout.tsx` | Fraunces: 8 → 2 variantes (`600` normal + itálico). Plex Sans: 3 → 1 (`400`). Plex Mono: 2 → 1 (`400`). Total: 13 → 4 arquivos de fonte. |
| `display: "swap"` explícito | `src/app/layout.tsx` | Garante texto visível com fonte de fallback durante o carregamento, evitando FOIT (flash of invisible text). |
| AVIF como formato preferencial de imagem | `next.config.ts` | `images.formats: ["image/avif", "image/webp"]` — o otimizador do Next passa a oferecer AVIF antes de WebP para navegadores compatíveis. |

A minificação de HTML/CSS/JS já é feita automaticamente pelo `next build`
em modo produção (Turbopack/webpack), então não exigiu configuração
adicional — só confirmação de que o build de produção está sendo usado no
deploy (ele está, via `npm run build` no workflow de CI/CD).

**Maior impacto esperado:** o corte de 13 para 4 variantes de fonte é a
mudança com maior efeito relativo neste projeto, porque era o único ponto
onde o código pedia mais do que realmente usa — como o site já era leve em
JS e as imagens já passavam pelo `next/image`, não havia outros gargalos
estruturais para atacar.

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
