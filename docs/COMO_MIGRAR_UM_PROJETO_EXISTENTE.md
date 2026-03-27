# 02 — COMO MIGRAR UM PROJETO EXISTENTE PARA USAR A `@prodexy/ui`

Este documento explica como pegar um projeto que já existe e substituir o design local pela lib `@prodexy/ui`.

O objetivo é:
- remover o design duplicado
- fazer o projeto usar a mesma base visual dos outros
- manter a lógica de negócio intacta

---

# 1. O QUE ENTRA E O QUE SAI

## Sai do projeto
Tudo que for UI genérica e já existir na lib, por exemplo:

```txt
components/ui/
hooks/use-mobile.ts
hooks/use-toast.ts
```

E possivelmente:
- utilitários genéricos de UI
- wrappers visuais duplicados
- CSS base antigo que redefinia os mesmos componentes

## Fica no projeto
- páginas
- menu/sidebar
- layout
- rotas
- componentes de negócio
- regras de negócio
- integrações
- branding

---

# 2. ORDEM CORRETA DE MIGRAÇÃO

## Passo 1
Instale a lib:

```bash
npm install git+https://github.com/Modaltech1/prodexy-ui.git
```

## Passo 2
Crie a pasta `branding/` no projeto

## Passo 3
Configure `brand.ts` e `brand.css`

## Passo 4
Corrija `app/layout.tsx`

## Passo 5
Corrija `app/globals.css`

## Passo 6
Troque os imports dos componentes

## Passo 7
Só depois remova `components/ui/`

---

# 3. EXEMPLO DE `layout.tsx`

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

# 4. EXEMPLO DE `globals.css`

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";
```

---

# 5. COMO TROCAR IMPORTS

## Antes
```ts
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
```

## Depois
```ts
import { Button, Card, Dialog, DialogContent } from "@prodexy/ui"
```

Faça isso arquivo por arquivo.

---

# 6. O QUE TESTAR DEPOIS DE CADA BLOCO DE MIGRAÇÃO

Depois de trocar alguns imports, rode:

```bash
npm run dev
```

Teste:
- botão
- input
- select
- dialog
- dropdown
- tabela
- tabs
- toast

---

# 7. QUANDO REMOVER A PASTA `components/ui`

Só remova quando:

- todos os imports já tiverem sido trocados
- o projeto já estiver rodando
- você tiver certeza que não restou nenhum componente antigo

---

# 8. PROBLEMAS MAIS COMUNS

## Problema 1 — componente aparece sem estilo
Causa provável:
- `globals.css` errado
- `@source` faltando
- CSS da lib não importado

## Problema 2 — modal não abre direito
Causa provável:
- projeto ainda usando componente local
- CSS da lib não foi gerado
- diálogo sem import correto

## Problema 3 — fonte diferente do esperado
Causa provável:
- branding não configurado
- `layout.tsx` sem as fontes
- variáveis de fonte não aplicadas

---

# 9. CHECKLIST DE MIGRAÇÃO

- [ ] instalei a lib
- [ ] criei `branding/brand.ts`
- [ ] criei `branding/brand.css`
- [ ] corrigi `layout.tsx`
- [ ] corrigi `globals.css`
- [ ] troquei imports locais pelos da lib
- [ ] testei os componentes principais
- [ ] removi `components/ui/`
- [ ] removi hooks visuais duplicados
- [ ] projeto rodando sem design duplicado

---

# 10. RESUMO

Migrar projeto existente é:

1. instalar a lib
2. configurar branding
3. configurar layout/css global
4. trocar imports
5. remover design local

A lógica do projeto não muda.
O que muda é só a fonte do design.
