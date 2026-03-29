# Guia de instrução para IA usar `@prodexy/ui`

## Finalidade
Este documento existe para orientar agentes, assistentes e IAs de geração de código a usarem a `@prodexy/ui` corretamente, sem recriar um design system paralelo dentro do projeto.

---

## Instrução base
Use o texto abaixo como instrução principal quando pedir geração de código para projetos que devem consumir a lib.

### Prompt base recomendado
> Este projeto deve usar a lib compartilhada `@prodexy/ui` como única fonte de componentes visuais genéricos.
> Não recrie `Button`, `Input`, `Card`, `Dialog`, `Select`, `Table`, `Tabs`, `Badge`, `Toast`, `Tooltip`, `Sheet`, `Popover` ou equivalentes localmente.
> O projeto deve manter localmente apenas branding, páginas, layouts, navegação, regras de negócio, integrações e componentes específicos do domínio.
> Configure `branding/brand.ts` e `branding/brand.css`.
> Configure `app/globals.css` para importar `@prodexy/ui/styles.css` e depois o branding local.
> Garanta compatibilidade com Tailwind CSS v4 e instale `tw-animate-css`, pois a folha da lib depende desse pacote.
> Em arquivos de página e componentes, importe os elementos visuais diretamente de `@prodexy/ui`, consolidando os imports para evitar duplicação.

---

## Regras obrigatórias para a IA

1. Usar `@prodexy/ui` para componentes visuais genéricos
2. Não criar `components/ui` local, salvo instrução explícita
3. Não duplicar design system no projeto
4. Criar `branding/brand.ts` e `branding/brand.css`
5. Importar `@prodexy/ui/styles.css` no CSS global
6. Importar o branding local depois do CSS da lib
7. Garantir que o projeto tenha `tw-animate-css` instalada
8. Consolidar imports para evitar símbolos duplicados no mesmo arquivo
9. Manter páginas, regras de negócio e integrações no projeto
10. Não mover branding de cliente para a lib

---

## Estrutura esperada do projeto gerado

```txt
app/
branding/
  brand.ts
  brand.css
public/
  logo.svg
  favicon.ico
components/
lib/
```

ou, se usar `src/`:

```txt
src/
  app/
  branding/
    brand.ts
    brand.css
  components/
  lib/
public/
```

---

## Exemplo de `globals.css`
```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

@source "../app/**/*.{ts,tsx}";
@source "../components/**/*.{ts,tsx}";
@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";
```

---

## Exemplo de import correto
```tsx
import { Button, Card, CardContent, Input, Label, Dialog, DialogContent } from '@prodexy/ui'
```

### Evite gerar isto
```tsx
import { Button } from '@prodexy/ui'
import { Button, Input } from '@prodexy/ui'
```

---

## Exemplo de `package.json` mínimo relevante
```json
{
  "dependencies": {
    "@prodexy/ui": "git+https://github.com/Modaltech1/prodexy-ui.git",
    "next": "^16.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-themes": "^0.4.6"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.9",
    "@tailwindcss/postcss": "^4.1.9",
    "postcss": "^8.5",
    "tw-animate-css": "1.3.3",
    "typescript": "^5"
  }
}
```

---

## O que a IA pode criar localmente
- sidebar específica do domínio
- header do sistema
- páginas de dashboard
- componentes de negócio
- wrappers compostos específicos do projeto
- tabelas e cards que carregam lógica do domínio

Mas esses elementos devem ser montados usando blocos visuais da lib sempre que possível.

---

## O que a IA não deve criar sem permissão explícita
- biblioteca de componentes local concorrente
- novos botões genéricos locais
- novo `Input`, `Card`, `Dialog` ou `Tabs` local
- CSS base concorrente que substitua a base da lib
- identidade visual fixa dentro da lib para um cliente específico

---

## Checklist para IA antes de entregar

- [ ] usei a `@prodexy/ui` para a UI genérica
- [ ] criei branding local
- [ ] configurei `globals.css`
- [ ] incluí `tw-animate-css`
- [ ] evitei imports duplicados
- [ ] mantive a lógica de negócio no projeto
- [ ] não criei design system paralelo

