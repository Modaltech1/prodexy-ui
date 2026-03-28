# INSTRUÇÃO BASE

Use esta instrução no prompt:

## TEXTO BASE
Este projeto deve usar obrigatoriamente a lib de UI compartilhada `@prodexy/ui`, que já define todo o design base do sistema.  
Não crie um novo design system local.  
Não recrie componentes genéricos como Button, Input, Card, Dialog, Select, Table, Tabs, Badge ou Toast.

### Regras obrigatórias
1. Importar componentes visuais da lib `@prodexy/ui`
2. Usar `@prodexy/ui/styles.css` no CSS global
3. Criar `branding/brand.css` e `branding/brand.ts` localmente para definir:
   - nome da marca
   - logo
   - cores
   - fontes
4. Não criar `components/ui` local
5. O projeto deve manter só:
   - páginas
   - menu
   - lógica de negócio
   - branding
   - integrações
6. O projeto deve usar o mesmo padrão visual da lib:
   - bordas
   - sombras
   - espaçamentos
   - inputs
   - botões
   - dialogs
   - cards
   - tabelas
7. O CSS global deve conter:

```css
@import "@prodexy/ui/styles.css";
@import "../branding/brand.css";

@source "../node_modules/@prodexy/ui/dist/**/*.{js,mjs}";
@source "../node_modules/@prodexy/ui/src/**/*.{ts,tsx}";
```

8. O `layout.tsx` deve importar apenas `./globals.css` e usar `brand.appName`, `brand.description` e `brand.logoUrl`
9. O projeto deve ser preparado para branding por cliente
10. Todo componente de negócio pode ser criado localmente, mas o design deve vir da lib

---

# PROMPT

> Este projeto deve usar a lib compartilhada `@prodexy/ui` como única fonte de design.  
> Não crie design system local.  
> Não crie `components/ui` local.  
> Use os componentes da lib para Button, Input, Card, Dialog, Select, Table, Tabs, Badge, Toast e afins.  
> O projeto deve manter localmente apenas branding, páginas, regras de negócio, integrações, navegação e componentes específicos do domínio.  
> Crie os arquivos `branding/brand.ts` e `branding/brand.css`.  
> Configure `app/globals.css` para importar `@prodexy/ui/styles.css` e o branding local.  
> O projeto precisa ser compatível com múltiplos clientes mudando apenas logo, nome, fonte e cores.

---

# NÃO FAZER

- não duplicar botões locais
- não duplicar inputs locais
- não criar CSS base concorrente
- não reimplementar modal/select/card
- não criar outra estrutura visual fora da lib
- não alterar o padrão visual da lib sem instrução explícita

---

# PODE CRIAR LOCALMENTE

- sidebar
- header
- dashboard
- cards de negócio
- páginas de produtos, vendas, clientes etc.
- wrappers compostos específicos do domínio

Mas sempre usando os blocos visuais da lib.

---

# COMO PENSAR ESSE DOCUMENTO

Este documento não é para explicar a arquitetura da lib.
Ele é para obrigar você a respeitar o design compartilhado.
