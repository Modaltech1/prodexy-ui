# 01 — COMO USAR A `@prodexy/ui` EM UM PROJETO NOVO

Este documento explica, passo a passo, como criar um **novo projeto** e fazer ele usar a lib `@prodexy/ui` desde o começo.

O objetivo é simples:

- o projeto tem a sua própria regra de negócio
- o projeto tem a sua própria marca (nome, logo, cores, fontes)
- o projeto usa o **mesmo design base** da lib

---

# 1. VISÃO GERAL

Quando você cria um projeto novo, a divisão correta é esta:

## A lib `@prodexy/ui` cuida de:
- componentes visuais
- CSS base
- comportamento visual padrão
- responsividade base
- estilo dos botões, cards, dialogs, selects, tabelas etc.

## O projeto cliente cuida de:
- páginas
- lógica de negócio
- integrações
- menu
- rotas
- logo
- cores
- fontes
- nome do sistema

---

# 2. PRÉ-REQUISITOS

Antes de começar, o projeto precisa ter:

- Next.js
- Tailwind CSS v4
- TypeScript
- React compatível com a lib
- a lib `@prodexy/ui` publicada no GitHub

---

# 3. INSTALAR A LIB

Na raiz do projeto:

```bash
npm install git+https://github.com/Modaltech1/prodexy-ui.git
```

Depois confirme se a lib entrou:

```bash
npm ls @prodexy/ui
```

---

# 4. ESTRUTURA RECOMENDADA DO PROJETO

Crie pelo menos esta estrutura:

```txt
app/
branding/
  brand.css
  brand.ts
public/
  logo.svg
```

Se você usa `src/`, pode ser assim:

```txt
src/
  branding/
    brand.css
    brand.ts
public/
  logo.svg
app/
```

O importante é manter:
- um arquivo de **branding visual**
- um arquivo de **configuração da marca**

---

# 5. ARQUIVO `branding/brand.ts`

Crie um arquivo assim:

```ts
export const brand = {
  appName: "Nome do Cliente",
  description: "Descrição do sistema",
  logoUrl: "/logo.svg",
  colors: {
    primary: "#0f766e",
  },
}
```

Esse arquivo é usado para:
- título
- metadata
- logo
- informações da marca

---

# 6. ARQUIVO `branding/brand.css`

Crie este arquivo para definir as variáveis de cor e fonte do projeto:

```css
:root {
  --background: #061226;
  --foreground: #f8fafc;

  --card: #08152a;
  --card-foreground: #f8fafc;

  --popover: #08152a;
  --popover-foreground: #f8fafc;

  --primary: #23c6b7;
  --primary-foreground: #031311;

  --secondary: #0d1b2f;
  --secondary-foreground: #f8fafc;

  --muted: #0b1730;
  --muted-foreground: #94a3b8;

  --accent: #0f213d;
  --accent-foreground: #f8fafc;

  --destructive: #ef4444;
  --destructive-foreground: #ffffff;

  --border: #173055;
  --input: #173055;
  --ring: #23c6b7;

  --sidebar: #071224;
  --sidebar-foreground: #f8fafc;
  --sidebar-primary: #23c6b7;
  --sidebar-primary-foreground: #031311;
  --sidebar-accent: #0f213d;
  --sidebar-accent-foreground: #f8fafc;
  --sidebar-border: #173055;
  --sidebar-ring: #23c6b7;

  --radius: 12px;

  --font-heading: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

Você vai trocar esses valores conforme o cliente.

---

# 7. CONFIGURAR O `app/layout.tsx`

Use o layout principal assim:

```tsx
import type { Metadata, Viewport } from "next"
import { Poppins, DM_Sans } from "next/font/google"
import { brand } from "@/branding/brand"
import "./globals.css"

const headingFont = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: brand.appName,
  description: brand.description,
  icons: {
    icon: [{ url: brand.logoUrl }],
    apple: brand.logoUrl,
  },
}

export const viewport: Viewport = {
  themeColor: brand.colors.primary,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

---

# 8. CONFIGURAR O `app/globals.css`

Esse arquivo é o mais importante da integração.

Use assim:

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

/* Faz o Tailwind v4 gerar as classes usadas pela lib */
@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";

/* se quiser, pode deixar alguma regra mínima específica do projeto aqui */
body {
   font-family: var(--font-body);
}

```

---

# 9. CONFIGURAR O `pnpm-workspace.yaml`
```yaml
onlyBuiltDependencies:
  - "@prodexy/ui"
```

---

## Importante
Esse arquivo:
- importa o CSS da lib
- importa o branding do projeto
- diz ao Tailwind onde encontrar as classes da lib

Sem isso, os componentes quebram visualmente.

---

# 9. COMO IMPORTAR OS COMPONENTES

Nos arquivos do projeto, use:

```ts
import { Button, Card, Input, Dialog, DialogContent } from "@prodexy/ui"
```

Não use mais:

```ts
import { Button } from "@/components/ui/button"
```

---

# 10. QUAIS PASTAS O NOVO PROJETO NÃO PRECISA TER

Se você vai usar a lib, o projeto novo **não precisa criar**:

```txt
components/ui/
```

Também normalmente não precisa criar localmente:
- hooks visuais duplicados
- utilitários visuais duplicados
- CSS de componentes visuais duplicado

---

# 11. O QUE O PROJETO NOVO DEVE MANTER LOCAL

O projeto mantém localmente:
- `branding/`
- `components/` específicos do negócio
- `features/`
- `services/`
- `hooks/` específicos do projeto
- páginas
- menu
- layout da aplicação
- integrações

---

# 12. CHECKLIST DE NOVO PROJETO

Antes de começar a desenvolver, confira:

- [ ] instalei a lib
- [ ] criei `branding/brand.ts`
- [ ] criei `branding/brand.css`
- [ ] configurei `layout.tsx`
- [ ] configurei `globals.css`
- [ ] coloquei a logo em `public/`
- [ ] estou importando componentes da lib
- [ ] não criei `components/ui/` local
- [ ] rodei o projeto e testei Button, Card, Input, Dialog e Select

---

# 13. RESUMO

Para projeto novo, a regra é:

## O projeto usa:
- a lib para o design
- branding local para identidade

## O projeto NÃO recria:
- botão
- input
- dialog
- select
- card
- tabela
- estilos base

Isso garante que todos os projetos usem o mesmo design.
