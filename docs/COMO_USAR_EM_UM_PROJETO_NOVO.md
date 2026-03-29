# Como usar a `@prodexy/ui` em um projeto novo

## Objetivo
Este guia mostra a configuração correta para iniciar um projeto novo já usando a `@prodexy/ui` como base visual compartilhada.

O foco aqui é:

- começar certo
- evitar duplicação de UI local
- garantir compatibilidade com Tailwind v4 e Next moderno
- separar UI compartilhada de branding e negócio

---

## Stack recomendada
- Next.js 15 ou 16
- React 18 ou 19
- TypeScript 5
- Tailwind CSS v4
- `@tailwindcss/postcss`
- `postcss`
- `tw-animate-css`
- `next-themes` se houver suporte a tema

---

## 1. Criar o projeto
Exemplo com Next.js:

```bash
npx create-next-app@latest meu-projeto
```

Ao final, entre na pasta do projeto.

---

## 2. Instalar dependências

### Se usar pnpm
```bash
pnpm add @prodexy/ui@git+https://github.com/Modaltech1/prodexy-ui.git
pnpm add next-themes
pnpm add -D tailwindcss @tailwindcss/postcss postcss tw-animate-css typescript @types/node @types/react @types/react-dom
```

### Se usar npm
```bash
npm install @prodexy/ui@git+https://github.com/Modaltech1/prodexy-ui.git next-themes
npm install -D tailwindcss @tailwindcss/postcss postcss tw-animate-css typescript @types/node @types/react @types/react-dom
```

### Observação importante
O pacote `tw-animate-css` é necessário porque `@prodexy/ui/styles.css` o importa diretamente.

---

## 3. Estrutura recomendada

```txt
app/
branding/
  brand.ts
  brand.css
public/
  logo.svg
  favicon.ico
```

Se usar `src/`:

```txt
src/
  app/
  branding/
    brand.ts
    brand.css
public/
  logo.svg
  favicon.ico
```

---

## 4. Criar `branding/brand.ts`

```ts
export const brand = {
  appName: 'Meu Projeto',
  shortName: 'Meu Projeto',
  description: 'Descrição do sistema.',
  logoUrl: '/logo.svg',
  faviconUrl: '/favicon.ico',
  themeColor: '#23c6b7',
}
```

---

## 5. Criar `branding/brand.css`

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

  --chart-1: #23c6b7;
  --chart-2: #0ea5e9;
  --chart-3: #8b5cf6;
  --chart-4: #f59e0b;
  --chart-5: #ef4444;

  --radius: 12px;

  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## 6. Configurar `app/globals.css`

### Exemplo recomendado
```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

@source "../app/**/*.{ts,tsx}";
@source "../components/**/*.{ts,tsx}";
@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";
```

### Regras importantes
- não duplique reset/base CSS concorrente sem necessidade
- não importe a folha da lib duas vezes
- mantenha o branding depois do CSS da lib

---

## 7. Configurar `app/layout.tsx`

```tsx
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { brand } from '@/branding/brand'
import './globals.css'

const headingFont = Poppins({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: brand.appName,
  description: brand.description,
  icons: {
    icon: [{ url: brand.faviconUrl ?? brand.logoUrl }],
    apple: brand.logoUrl,
  },
}

export const viewport: Viewport = {
  themeColor: brand.themeColor,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

## 8. Consumir componentes da lib

### Exemplo correto
```tsx
import { Button, Card, CardContent, Input, Label } from '@prodexy/ui'
```

### Evite
- importar o mesmo componente várias vezes no mesmo arquivo
- criar `components/ui` local duplicando componentes já exportados pela lib

---

## 9. Exemplo de página inicial mínima

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@prodexy/ui'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Projeto configurado</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Continuar</Button>
        </CardContent>
      </Card>
    </main>
  )
}
```

---

## 10. Teste inicial obrigatório
Depois de configurar tudo, rode:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

Valide:
- carregamento sem erro de CSS
- fonte aplicada
- cores do branding ativas
- componentes renderizando com estilo
- ausência de imports duplicados

---

## 11. Problemas mais comuns

### Erro: `Can't resolve 'tw-animate-css'`
Causa: pacote ausente no projeto.

Solução:
```bash
pnpm add -D tw-animate-css
```

### Componente sem estilo
Causas possíveis:
- `globals.css` não importou `@prodexy/ui/styles.css`
- branding entrou antes do CSS da lib
- `@source` incompleto

### Metadata e branding não aplicados
Causas possíveis:
- `brand.ts` não foi usado no `layout.tsx`
- logo/favicons ausentes em `public/`

---

## Checklist de setup

- [ ] projeto criado
- [ ] `@prodexy/ui` instalada
- [ ] `tw-animate-css` instalada
- [ ] `brand.ts` criado
- [ ] `brand.css` criado
- [ ] `globals.css` configurado
- [ ] `layout.tsx` configurado
- [ ] componentes importados da lib
- [ ] página teste renderizando corretamente

