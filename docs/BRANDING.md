# Branding por projeto na `@prodexy/ui`

## Objetivo
A `@prodexy/ui` deve manter um design base consistente, enquanto cada projeto aplica sua própria identidade visual sem reescrever componentes.

O branding do projeto deve controlar:

- nome da aplicação
- descrição
- logo
- favicon
- cores principais
- cores de suporte
- raio padrão
- fontes
- eventualmente modo claro/escuro, se o projeto adotar os dois

---

## Princípio de arquitetura

### A lib controla
- estrutura visual
- escala de componentes
- espaçamento
- sombras
- estados visuais
- acessibilidade e comportamento padrão

### O projeto controla
- identidade da marca
- tokens finais
- fontes e logo
- metadata
- ícones

Isso evita que cada projeto recrie um design system e, ao mesmo tempo, preserva personalização por cliente.

---

## Estrutura recomendada

```txt
branding/
  brand.ts
  brand.css
public/
  logo.svg
  favicon.ico
```

Se o projeto usa `src/`:

```txt
src/
  branding/
    brand.ts
    brand.css
public/
  logo.svg
  favicon.ico
```

---

## Arquivo `brand.ts`
Use `brand.ts` para informações semânticas e de metadata.

### Exemplo recomendado
```ts
export const brand = {
  appName: 'Distribuidora Ceará',
  shortName: 'Distribuidora Ceará',
  description: 'Sistema interno para gestão comercial, pedidos, clientes e operação.',
  logoUrl: '/logo.svg',
  faviconUrl: '/favicon.ico',
  locale: 'pt-BR',
  themeColor: '#23c6b7',
}
```

### Quando usar esse arquivo
- `metadata` do Next.js
- título da aplicação
- descrição
- ícones
- PWA metadata, se existir
- cabeçalho do sistema, quando necessário

---

## Arquivo `brand.css`
Use `brand.css` para tokens visuais do projeto.

### Exemplo base completo
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

## Ordem correta de importação
No `app/globals.css` do projeto:

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";
```

O `brand.css` deve entrar depois para sobrescrever os tokens base da lib.

---

## Exemplo de `layout.tsx`
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

## Boas práticas de branding

### 1. Não altere a lib para cada cliente
Se a necessidade é só trocar cor, fonte, logo, raio ou metadata, isso pertence ao projeto.

### 2. Evite hardcode visual nas páginas
Errado:

```tsx
className="bg-[#23c6b7] text-white"
```

Prefira usar os tokens já expostos pela lib e pelo branding.

### 3. Valide contraste
Sempre teste:
- texto sobre fundo principal
- texto em botões primários
- bordas em cards e inputs
- hover e focus visíveis

### 4. Teste pelo menos em 3 variações de tema
- escuro
- claro
- cor forte

---

## O que entra em branding e o que não entra

### Entra
- cores
- fontes
- logo
- metadata
- ícones
- raio padrão

### Não entra
- regra de negócio
- layout de páginas específicas
- componente de domínio
- regra de permissão
- fluxo operacional

---

## Checklist de branding

- [ ] `brand.ts` criado
- [ ] `brand.css` criado
- [ ] logo em `public/`
- [ ] `globals.css` importa primeiro a lib e depois o branding
- [ ] `layout.tsx` usa as fontes e metadata da marca
- [ ] contraste validado
- [ ] componentes principais testados com a nova identidade

