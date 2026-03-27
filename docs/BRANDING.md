# COMO MODIFICAR CORES, FONTES E LOGO EM CADA PROJETO

Este documento explica como cada projeto pode usar a mesma lib UI e definir sua própria identidade visual.

## Ideia central
- a **lib UI** guarda o design padrão
- cada **projeto** define:
  - cores
  - fontes
  - logo
  - nome

Assim:
- o design é o mesmo
- a identidade muda por cliente

---

## 1. O QUE FICA NA LIB

Na lib ficam:
- botão
- input
- card
- modal
- tabela
- badge
- tabs
- dialogs
- spacing
- bordas
- sombras
- responsividade
- animações base

A lib **não** deve ter:
- nome de cliente
- logo do cliente
- cor fixa de cliente
- fonte fixa de cliente

---

## 2. O QUE FICA NO PROJETO

Cada projeto cliente deve ter sua própria pasta de branding:

```txt
src/
  branding/
    brand.css
    brand.ts
    logo.svg
```

---

## 3. ARQUIVO DE CORES DO PROJETO

Crie este arquivo no projeto cliente:

```css
/* src/branding/brand.css */
:root {
  --brand-primary: #696cff;
  --brand-primary-foreground: #ffffff;

  --brand-background: #0f172a;
  --brand-foreground: #f8fafc;

  --brand-card: #111827;
  --brand-card-foreground: #f8fafc;

  --brand-border: #1e293b;

  --brand-muted: #0b1220;
  --brand-muted-foreground: #94a3b8;

  --brand-accent: #03c3ec;
  --brand-accent-foreground: #001018;

  --brand-danger: #ef4444;
  --brand-danger-foreground: #ffffff;

  --brand-radius: 12px;

  --brand-font-heading: "Inter", sans-serif;
  --brand-font-body: "Inter", sans-serif;
}
```

Esse exemplo acima pode ser usado no **Projeto 1**.

---

## 4. COMO IMPORTAR NO PROJETO

No `layout.tsx` ou arquivo principal do projeto:

```ts
import "@/branding/brand.css"
```

Esse import deve acontecer junto do CSS principal.

---

## 5. COMO A LIB DEVE USAR ISSO

A lib UI deve usar **CSS variables**.

Exemplo:

```css
.button-primary {
  background: var(--brand-primary);
  color: var(--brand-primary-foreground);
  border-radius: var(--brand-radius);
}

.card {
  background: var(--brand-card);
  color: var(--brand-card-foreground);
  border: 1px solid var(--brand-border);
}

body {
  background: var(--brand-background);
  color: var(--brand-foreground);
  font-family: var(--brand-font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--brand-font-heading);
}
```

---

## 6. COMO TROCAR FONTES

No projeto cliente, troque só estas variáveis:

```css
--brand-font-heading: "Poppins", sans-serif;
--brand-font-body: "Inter", sans-serif;
```

ou

```css
--brand-font-heading: "DM Sans", sans-serif;
--brand-font-body: "DM Sans", sans-serif;
```

Se o projeto usar Next.js com `next/font`, aplique as fontes no projeto e mapeie para as variáveis.

---

## 7. COMO TROCAR LOGO

A logo fica no projeto cliente, não na lib.

Exemplo:

```txt
src/branding/logo.svg
```

Ou em `public/logo.svg`.

Depois, no projeto:

```ts
export const brand = {
  name: "Cliente X",
  logoUrl: "/logo.svg",
}
```

---

## 8. EXEMPLO DE CONFIG DO PROJETO

```ts
// src/branding/brand.ts
export const brand = {
  name: "Projeto 1",
  logoUrl: "/logo.svg",
  colors: {
    primary: "#696cff",
    accent: "#03c3ec",
    background: "#0f172a",
    foreground: "#f8fafc",
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
}
```

---

## 9. EXEMPLO PRÁTICO

### Projeto 1
- primária: `#696cff`
- acento: `#03c3ec`
- fonte: `Inter`

### Projeto 2
- primária: `#16a34a`
- acento: `#f59e0b`
- fonte: `Poppins`

### Projeto 3
- primária: `#7c3aed`
- acento: `#06b6d4`
- fonte: `DM Sans`

Todos usam a mesma lib.  
Só muda o branding local.

---

## 10. O QUE NÃO FAZER

Não faça:
- cor hardcoded dentro dos componentes
- fonte hardcoded no botão/input/card
- logo dentro da lib
- nome do cliente dentro da lib

---

## 11. REGRA FINAL

### A lib define:
- o design
- a estrutura visual
- a responsividade
- o comportamento dos componentes

### O projeto define:
- cor
- fonte
- logo
- nome
- favicon

Esse é o modelo certo para usar o mesmo design em múltiplos projetos.
