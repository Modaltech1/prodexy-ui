# Como testar e debugar a `@prodexy/ui`

## Objetivo
Este documento estabelece um fluxo profissional para validar mudanças na lib e reduzir regressões em projetos consumidores.

A regra central é simples:

> uma mudança na lib só está pronta quando compila, renderiza corretamente e funciona em pelo menos um projeto real consumidor.

---

## Camadas de validação

### 1. Build da própria lib
Valida exportações, tipagem e empacotamento.

### 2. Teste visual local
Valida aparência, espaçamento, contraste, responsividade e estados visuais.

### 3. Teste funcional
Valida interação dos componentes.

### 4. Teste de integração em projeto consumidor
Valida consumo real da lib, CSS global, branding e dependências externas.

### 5. Teste de build do projeto consumidor
Valida o cenário de produção.

---

## Fluxo mínimo obrigatório antes de publicar

### Na lib
```bash
pnpm install
pnpm build
```

ou

```bash
npm install
npm run build
```

### Em pelo menos um projeto consumidor
```bash
pnpm install
pnpm dev
pnpm build
```

---

## O que testar visualmente
Sempre valide pelo menos estes componentes:

- Button
- Input
- Textarea
- Card
- Dialog
- Sheet
- Select
- Tabs
- Table
- Badge
- Tooltip
- Toast/Sonner
- Sidebar
- Chart, se alterado

### O que observar
- padding
- alinhamento
- tipografia
- contraste
- borda
- sombra
- estados de hover/focus/disabled
- overflow
- altura e largura mínimas

---

## Larguras mínimas para teste responsivo
Teste pelo menos em:

- 375px
- 768px
- 1024px
- 1440px

---

## Checklist de integração no projeto consumidor
Antes de culpar a lib, valide estes pontos no projeto:

- [ ] `@prodexy/ui` instalada corretamente
- [ ] `tw-animate-css` instalada
- [ ] `@prodexy/ui/styles.css` importado no `globals.css`
- [ ] branding importado depois da folha da lib
- [ ] `@source` apontando para `node_modules/@prodexy/ui`
- [ ] imports sem duplicação
- [ ] `layout.tsx` consistente com branding

---

## Erros comuns e diagnóstico

### 1. `Can't resolve 'tw-animate-css'`
**Causa provável:** projeto consumidor sem a dependência `tw-animate-css`.

**Como confirmar:** o erro aparece ao processar `globals.css` ou `@prodexy/ui/styles.css`.

**Correção:**
```bash
pnpm add -D tw-animate-css
```

---

### 2. `the name 'X' is defined multiple times`
**Causa provável:** imports duplicados do mesmo componente no mesmo arquivo.

**Correção:** consolidar em um único import.

Exemplo:
```tsx
import { Button, Input, Card } from '@prodexy/ui'
```

---

### 3. Componente sem estilo
**Causas prováveis:**
- CSS global da lib não importado
- branding importado na ordem errada
- `@source` faltando
- conflito com CSS antigo do projeto

---

### 4. Build da lib falha no DTS
**Causa provável:** tipagem incompatível em exports da lib.

**Abordagem:**
- rodar build isolado da lib
- corrigir arquivo específico
- só depois retestar no projeto consumidor

---

## Estratégia recomendada de debug

### Passo 1 — isolar onde está o erro
Pergunta:
- quebra na lib sozinha?
- ou quebra apenas no projeto consumidor?

### Passo 2 — validar dependências do projeto consumidor
Compare `package.json`, `globals.css`, `layout.tsx` e lockfile com um projeto que já funciona.

### Passo 3 — validar CSS global
É comum o problema estar em:
- ordem de imports
- dependência ausente
- fonte não carregada

### Passo 4 — validar imports dos componentes
Imports duplicados ou mistura de UI local com UI da lib geram falsos sintomas.

### Passo 5 — validar build de produção
`dev` passando não encerra a validação. Sempre rode `build`.

---

## Matriz mínima de testes antes de publicar versão nova

- [ ] lib compila
- [ ] componente alterado testado visualmente
- [ ] componente alterado testado funcionalmente
- [ ] projeto consumidor real sobe em `dev`
- [ ] projeto consumidor real sobe em `build`
- [ ] branding de pelo menos um cliente continua correto
- [ ] sem regressão evidente em responsividade

---

## Recomendação de evolução do processo
Com o crescimento da lib, vale considerar:

- playground interno
- Storybook
- snapshots visuais
- CI com build da lib + build de projeto exemplo
- checklist de release

Mas, enquanto isso não existir, o fluxo manual acima deve ser seguido sem exceção.

