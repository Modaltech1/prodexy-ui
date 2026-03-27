# Migração do Projeto 1 para usar @prodexy/ui

## 1. Instale a lib
```bash
npm install git+ssh://git@github.com/SEU-USUARIO/prodexy-ui.git
```

## 2. No Projeto 1, importe o CSS da lib
No `app/layout.tsx` ou `app/globals.css`, garanta o import da lib:
```ts
import '@prodexy/ui/src/styles.css'
```

## 3. Trocas de import mais comuns
### UI local -> lib
- `@/components/ui/button` -> `@prodexy/ui`
- `@/components/ui/input` -> `@prodexy/ui`
- `@/components/ui/card` -> `@prodexy/ui`
- `@/components/ui/dialog` -> `@prodexy/ui`
- `@/components/ui/select` -> `@prodexy/ui`
- `@/components/ui/table` -> `@prodexy/ui`
- `@/components/ui/tabs` -> `@prodexy/ui`
- `@/components/ui/toaster` -> `@prodexy/ui`
- `@/components/ui/toast` -> `@prodexy/ui`
- `@/components/ui/sidebar` -> **MANTER LOCAL** se a sidebar for específica do projeto

### Hooks e utilitários
- `@/hooks/use-mobile` -> `@prodexy/ui`
- `@/hooks/use-toast` -> `@prodexy/ui`
- `@/lib/utils` -> `@prodexy/ui`
- `@/components/theme-provider` -> `@prodexy/ui`

## 4. O que apagar do Projeto 1 depois que tudo estiver funcionando
- pasta `components/ui/`
- `hooks/use-mobile.ts`
- `hooks/use-toast.ts`
- `lib/utils.ts`
- `components/theme-provider.tsx` (opcional)

## 5. O que não apagar
- `components/sidebar.tsx`
- `components/mobile-nav.tsx`
- views de negócio
- dialogs de negócio
- Supabase
- middleware
- páginas

## 6. Regra de segurança
Não apague nada antes de:
1. trocar import
2. rodar local
3. validar build
