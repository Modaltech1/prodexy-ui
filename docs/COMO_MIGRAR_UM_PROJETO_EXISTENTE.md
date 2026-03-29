# Como migrar um projeto existente para `@prodexy/ui`

## Objetivo
Este guia mostra como substituir uma UI local ou fragmentada por `@prodexy/ui` sem quebrar o projeto.

A meta da migração é:

- centralizar UI genérica na lib
- reduzir duplicação
- manter regras de negócio intactas
- preparar o projeto para branding padronizado

---

## Estratégia correta
Não tente migrar tudo de uma vez e depois descobrir o que quebrou. A abordagem correta é por camadas.

### Ordem recomendada
1. instalar a lib
2. configurar CSS global e branding
3. migrar componentes básicos
4. validar build
5. migrar componentes compostos
6. remover sobras locais

---

## 1. Mapear o que existe hoje
Antes de trocar qualquer import, classifique os arquivos atuais:

### UI genérica candidata à remoção
- `components/ui/button.tsx`
- `components/ui/input.tsx`
- `components/ui/card.tsx`
- `components/ui/dialog.tsx`
- `components/ui/select.tsx`
- `components/ui/table.tsx`
- `components/ui/tabs.tsx`
- `components/ui/toast.tsx`

### Deve permanecer no projeto
- componentes de domínio
- header/sidebar próprios do sistema
- telas de negócio
- serviços e integração
- autenticação
- páginas

---

## 2. Instalar dependências necessárias

### pnpm
```bash
pnpm add @prodexy/ui@git+https://github.com/Modaltech1/prodexy-ui.git next-themes
pnpm add -D tailwindcss @tailwindcss/postcss postcss tw-animate-css
```

### npm
```bash
npm install @prodexy/ui@git+https://github.com/Modaltech1/prodexy-ui.git next-themes
npm install -D tailwindcss @tailwindcss/postcss postcss tw-animate-css
```

---

## 3. Criar branding local
Adicione:

```txt
branding/
  brand.ts
  brand.css
```

Não mova branding para a lib.

---

## 4. Ajustar `globals.css`
No projeto, o CSS global deve conter pelo menos:

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

@source "../app/**/*.{ts,tsx}";
@source "../components/**/*.{ts,tsx}";
@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";
```

### Regra importante
Se o projeto tiver muito CSS global antigo, não remova tudo cegamente. Primeiro garanta que a base da lib está funcionando, depois limpe o que sobrou.

---

## 5. Ajustar `layout.tsx`
O layout deve importar apenas o `globals.css` e usar branding para metadata e fontes.

Verifique:
- metadata configurada
- fontes mapeadas para `--font-heading` e `--font-body`
- body com `font-sans antialiased`

---

## 6. Migrar imports dos componentes

### Antes
```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
```

### Depois
```tsx
import { Button, Card, Dialog, DialogContent } from '@prodexy/ui'
```

### Regra prática
Faça arquivo por arquivo.

Não troque tudo e só depois teste.

---

## 7. Testar a cada bloco de migração
Depois de migrar um grupo de componentes, rode:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

Valide:
- carregamento do CSS
- botões
- inputs
- dialogs
- dropdowns
- tabelas
- tabs
- toasts

---

## 8. Só então remova UI local duplicada
Remova a pasta `components/ui/` apenas quando:

- todos os imports principais já foram trocados
- o projeto compila
- não restam referências antigas

### Ajuda prática
Faça busca por:

```txt
@/components/ui/
```

Se ainda houver ocorrências relevantes, a remoção é prematura.

---

## 9. Erros comuns durante migração

### 1. Import duplicado no mesmo arquivo
Sintoma: `the name 'Button' is defined multiple times`

Causa: o mesmo componente foi importado repetidamente.

Solução: consolidar tudo em um único import.

### 2. Erro de `tw-animate-css`
Sintoma: `Can't resolve 'tw-animate-css'`

Causa: o projeto não instalou a dependência exigida pela folha da lib.

Solução:
```bash
pnpm add -D tw-animate-css
```

### 3. Estilo não aparece
Causas possíveis:
- `globals.css` configurado errado
- ordem de import incorreta
- `@source` incompleto
- projeto ainda usando UI local concorrente

### 4. Fonte errada
Causas possíveis:
- fontes não configuradas no layout
- branding sem variáveis de fonte

---

## 10. Checklist final de migração

- [ ] lib instalada
- [ ] `tw-animate-css` instalada
- [ ] branding criado
- [ ] `globals.css` configurado
- [ ] `layout.tsx` ajustado
- [ ] imports trocados por `@prodexy/ui`
- [ ] UI local duplicada removida
- [ ] projeto compila em dev
- [ ] projeto compila em build
- [ ] branding validado

