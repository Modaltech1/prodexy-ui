# @prodexy/ui — visão geral, responsabilidades e limites

## Objetivo
A `@prodexy/ui` é a camada de interface compartilhada entre projetos. Ela existe para centralizar:

- componentes visuais reutilizáveis
- tokens e variáveis de estilo
- comportamento visual padrão
- consistência de UX entre produtos
- redução de retrabalho e divergência visual

Ela **não** substitui a aplicação. Cada projeto continua responsável pela própria regra de negócio, navegação, integrações, permissões, dados e fluxos específicos.

---

## O que a lib entrega hoje
Com base no código atual da lib, a `@prodexy/ui` exporta:

- componentes base como `Button`, `Input`, `Card`, `Dialog`, `Sheet`, `Tabs`, `Table`, `Badge`, `Tooltip`, `Select`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Popover`, `DropdownMenu`, `Toast`, `Sonner`, `Sidebar`, `Skeleton`, `Spinner`, `Pagination`, `Menubar`, `NavigationMenu`, `HoverCard`, `ScrollArea`, `Resizable`, `Chart` e outros
- hooks utilitários como `use-mobile` e `use-toast`
- `theme-provider`
- utilitário `cn`
- utilitários de branding em `src/branding/*`
- folha de estilo compartilhada em `@prodexy/ui/styles.css`

---

## O que deve ficar na lib
Coloque na lib apenas o que faz sentido ser compartilhado entre vários projetos.

### Entram na lib
- componentes genéricos de UI
- estilos base
- tokens padrões
- wrappers visuais reaproveitáveis
- helpers de tema/branding realmente genéricos
- padrões de acessibilidade e interação

### Não entram na lib
- páginas completas de cliente
- dashboards fechados de um domínio específico
- regras de negócio
- consultas a banco
- integrações externas específicas
- textos fixos de um sistema cliente
- branding exclusivo de um cliente

---

## O que deve ficar no projeto consumidor
Cada projeto deve manter localmente:

- `app/` ou `src/app/`
- layouts e rotas
- autenticação
- integrações e serviços
- componentes de domínio
- sidebar, header e navegação da aplicação, quando forem específicos do negócio
- branding do cliente
- assets do cliente, como logo e ícones

---

## Como pensar a separação
Use esta regra prática:

### Vai para a lib quando
- é visual
- é genérico
- é repetível
- será reutilizado em mais de um projeto

### Fica no projeto quando
- depende do domínio
- depende da operação do cliente
- carrega regra de negócio
- muda fortemente de um sistema para outro

Exemplo:

- `Button` → lib
- `Card` → lib
- `Tabela de produtos` genérica → pode ir para a lib se for realmente genérica
- `CardResumoFinanceiroDoClienteX` → projeto
- `Sidebar da distribuidora` → projeto
- `Fluxo de fechamento de caixa` → projeto

---

## Arquitetura de consumo esperada
A estrutura recomendada para um projeto que consome a lib é:

```txt
app/
branding/
  brand.ts
  brand.css
public/
  logo.svg
lib/
components/
```

ou, se o projeto usa `src/`:

```txt
src/
  app/
  branding/
    brand.ts
    brand.css
  lib/
  components/
public/
  logo.svg
```

---

## CSS e estilo: regra importante
A lib depende de CSS global compartilhado. O projeto consumidor deve importar:

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";
```

A ordem importa:

1. primeiro a folha base da lib
2. depois o branding do projeto

Assim, o projeto sobrescreve tokens como `--primary`, `--background`, `--radius`, `--font-heading` e afins.

---

## Dependências relevantes do projeto consumidor
Para consumir a lib corretamente, o projeto deve estar compatível com a base atual da `@prodexy/ui`.

### Mínimo recomendado
- Next.js 15 ou 16
- React 18 ou 19
- TypeScript 5
- Tailwind CSS v4
- `@tailwindcss/postcss`
- `postcss`
- `tw-animate-css`
- `next-themes` quando houver alternância de tema

### Ponto crítico
A folha `@prodexy/ui/styles.css` importa `tw-animate-css`. Portanto, o projeto consumidor precisa ter essa dependência instalada. Se não tiver, o build quebra com erro de resolução de módulo CSS.

---

## Erros clássicos ao consumir a lib

### 1. Import duplicado de componentes
Errado:

```ts
import { Button, Input } from '@prodexy/ui'
import { Button } from '@prodexy/ui'
```

Certo:

```ts
import { Button, Input } from '@prodexy/ui'
```

### 2. Projeto sem `tw-animate-css`
Sintoma: erro no `globals.css` ao resolver `tw-animate-css`.

### 3. Branding não carregado
Sintoma: projeto abre com tokens padrão da lib em vez da identidade do cliente.

### 4. Mistura entre UI local e UI da lib
Sintoma: duplicação de estilos, inconsistência visual e comportamento divergente.

---

## Decisão recomendada para evolução
Para manter a lib sustentável:

- usar a lib como fonte única de UI genérica
- manter branding no projeto consumidor
- validar mudanças da lib em pelo menos um projeto real antes de publicar
- evitar adicionar componentes de domínio na lib por conveniência momentânea

---

## Checklist rápido: estou usando a lib do jeito certo?

- [ ] componentes genéricos vêm de `@prodexy/ui`
- [ ] `@prodexy/ui/styles.css` está importado no `globals.css`
- [ ] `brand.css` está importado depois do CSS da lib
- [ ] o projeto tem `tw-animate-css` instalado
- [ ] não existe `components/ui` local duplicando a lib sem necessidade
- [ ] a navegação e as regras de negócio continuam no projeto
- [ ] o branding do cliente está separado da UI compartilhada

