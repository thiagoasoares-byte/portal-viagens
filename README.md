# Rota Aberta — Portal de Viagens

Projeto de estudo em **Next.js (App Router)** que simula um pequeno portal de
viagens: uma listagem de destinos turísticos e páginas de detalhe geradas por
rota dinâmica.

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

## Observação sobre as imagens

As imagens dos destinos usam o serviço `picsum.photos` como placeholder
(cada destino tem uma *seed* fixa, então a imagem não muda entre builds).
Para usar fotos reais, basta trocar o campo `imagem` em `src/data/destinos.ts`
pela URL desejada e, se for um domínio novo, adicioná-lo em
`remotePatterns` no `next.config.ts`.

## Autor

Thiago Alves Soares
