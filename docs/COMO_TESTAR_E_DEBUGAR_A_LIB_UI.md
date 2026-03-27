# COMO TESTAR, VALIDAR E DEBUGAR A LIB `prodexy-ui`

Este documento explica, de forma prática, como você pode **testar**, **validar** e **debugar** a sua lib de UI.

A ideia aqui não é criar burocracia.  
É te dar um processo simples para garantir que:

- os componentes funcionem
- o visual não quebre
- as mudanças não estraguem outros projetos
- o consumo da lib pelos projetos clientes seja previsível

---

# 1. O QUE VOCÊ PRECISA TESTAR NA PRÁTICA

Quando você altera a lib, existem **4 camadas de teste**.

## Camada 1 — Teste visual
Ver se o componente continua bonito e correto.

Exemplos:
- botão
- input
- card
- modal
- tabela
- badge

Pergunta:
> “visualmente continua certo?”

---

## Camada 2 — Teste funcional do componente
Ver se o componente funciona.

Exemplos:
- botão responde clique
- dialog abre/fecha
- select muda valor
- toast aparece
- tabs trocam conteúdo

Pergunta:
> “o comportamento continua certo?”

---

## Camada 3 — Teste de integração com projeto cliente
Ver se a lib continua funcionando quando instalada em um projeto real.

Pergunta:
> “o projeto que consome a lib continua renderizando certo?”

---

## Camada 4 — Teste de branding
Ver se trocar:
- cor
- fonte
- logo
- tema

não quebra layout nem contraste.

Pergunta:
> “a mesma lib continua boa em clientes diferentes?”

---

# 2. MELHOR FORMA DE TESTAR ISSO

Para o seu estágio atual, eu recomendo:

## obrigatório
- teste local da lib
- teste em um projeto exemplo
- teste em pelo menos 1 projeto real
- teste responsivo

## opcional (mais tarde)
- Storybook
- testes automatizados
- snapshot visual
- CI

---

# 3. COMO TESTAR LOCALMENTE A LIB

## Estrutura recomendada
Você precisa ter:

- repositório da lib `prodexy-ui`
- um projeto de exemplo para consumir a lib
- idealmente um projeto real usando a lib

---

## Fluxo local recomendado

### Passo 1 — rodar a lib em modo desenvolvimento
Você pode usar um projeto de exemplo dentro da própria lib ou usar `npm link`.

### Opção A — projeto de exemplo dentro da lib
Exemplo:

```txt
prodexy-ui/
  src/
  docs/
  playground/
```

O `playground/` é um projeto simples só para testar os componentes.

Essa é a melhor forma.

---

## O que testar no playground
Crie uma página com:

- Button
- Input
- Select
- Dialog
- Badge
- Table
- Tabs
- Toast
- Card

Nessa página você vê tudo rápido.

---

# 4. FORMA MAIS SIMPLES DE DEBUGAR

## Debug visual
O mais importante para UI é:

- abrir no navegador
- usar DevTools
- inspecionar classes
- inspecionar CSS variables
- testar breakpoints

### O que observar
- padding
- gap
- alinhamento
- tipografia
- contraste
- hover
- focus
- borda
- sombra
- overflow

---

## Debug de variáveis de tema
Se a lib usa branding por CSS variables, confira se o projeto cliente realmente carregou:

```css
:root {
  --brand-primary: ...;
}
```

No DevTools:
- abra o elemento
- veja o valor computado
- confirme se a variável existe

Se a variável não existir, o problema normalmente está em:
- import do `brand.css`
- ordem de imports
- conflito de CSS

---

# 5. COMO TESTAR BRANDING

Toda mudança visual importante deve ser testada em pelo menos 3 cenários:

## Cenário A — tema padrão
Exemplo:
- roxo/azul

## Cenário B — tema claro
Exemplo:
- fundo claro
- textos escuros

## Cenário C — tema com cor forte
Exemplo:
- verde
- vinho
- laranja

Isso serve para detectar:
- contraste ruim
- borda sumindo
- componente “lavado”
- hover invisível

---

# 6. TESTE RESPONSIVO (OBRIGATÓRIO)

Você precisa sempre testar a lib nestas larguras:

- 375px
- 768px
- 1024px
- 1440px

### Verificar:
- botões quebrando linha?
- cards espremidos?
- input muito pequeno?
- modal passa da tela?
- tabela estoura largura?
- menu mobile continua usável?

---

# 7. COMO TESTAR EM UM PROJETO REAL

Esse é o teste mais importante.

Sempre que mudar a lib:

## Passo 1
Atualize a lib

## Passo 2
Instale/atualize no Projeto 1

## Passo 3
Suba o projeto localmente

## Passo 4
Verifique:
- tela inicial
- dashboard
- formulários
- modal
- tabelas
- menu
- mobile

Porque muitas vezes a lib funciona isolada e quebra dentro do projeto real.

---

# 8. COMO FAZER TESTE MANUAL DIREITO

Crie um checklist padrão.

## Checklist mínimo por release da lib
- [ ] botão renderiza certo
- [ ] input renderiza certo
- [ ] select funciona
- [ ] dialog abre/fecha
- [ ] toast aparece
- [ ] tabs trocam
- [ ] tabela não quebra
- [ ] responsivo ok
- [ ] branding ok
- [ ] projeto real ok

---

# 9. COMO DEBUGAR PROBLEMAS COMUNS

## Problema: cor não mudou
Verificar:
- o `brand.css` está importado?
- a variável está com nome certo?
- a lib usa `var(--brand-primary)` mesmo?
- outra regra CSS está sobrescrevendo?

---

## Problema: fonte não mudou
Verificar:
- a fonte foi realmente carregada?
- a variável está correta?
- a lib está usando `var(--brand-font-body)`?
- existe font fallback?

---

## Problema: componente quebrou depois da atualização
Verificar:
- mudou API do componente?
- mudou classe base?
- projeto cliente usava algum estilo custom por fora?
- import está apontando para a lib certa?

---

## Problema: modal/toast não funciona
Verificar:
- provider necessário está montado?
- hook foi exportado corretamente?
- dependência visual foi importada?

---

# 10. COMO TESTAR A LIB ANTES DE PUBLICAR

Sempre siga esta ordem:

## Ordem correta
1. testar no playground
2. testar branding
3. testar responsivo
4. testar em projeto real
5. só depois publicar nova versão

Nunca publique primeiro para “ver depois”.

---

# 11. COMO FAZER VERSIONAMENTO SEM BAGUNÇA

Use versionamento simples:

- `1.0.0` → primeira versão estável
- `1.0.1` → ajuste pequeno visual
- `1.1.0` → novo componente ou melhoria relevante
- `2.0.0` → mudança que quebra compatibilidade

### Regra prática
Se um projeto cliente precisará mudar código para acompanhar a lib:
> isso provavelmente é uma mudança maior

---

# 12. O QUE É POSSÍVEL AUTOMATIZAR (NO FUTURO)

Mais tarde você pode automatizar:

## A. Storybook
Para visualizar todos os componentes isolados

## B. Vitest / Jest
Para testar comportamento

## C. Playwright
Para testar interação visual

## D. Chromatic / screenshot diff
Para detectar quebra visual

---

# 13. O QUE EU RECOMENDO PRA VOCÊ AGORA

No seu estágio atual, o melhor custo-benefício é:

## agora
- playground
- checklist manual
- teste em projeto real
- teste responsivo

## depois
- Storybook

## mais à frente
- Playwright / snapshot

---

# 14. ESTRUTURA RECOMENDADA PARA TESTES

Você pode deixar assim:

```txt
prodexy-ui/
  src/
  docs/
  playground/
  tests/
```

### playground
para ver os componentes

### tests
para automação futura

---

# 15. FLUXO DE TRABALHO RECOMENDADO

Sempre que alterar a lib:

## fluxo ideal
1. alterar componente
2. testar no playground
3. testar com branding diferente
4. testar responsivo
5. testar no Projeto 1
6. publicar nova versão
7. atualizar projetos clientes

---

# 16. RESUMO FINAL

Para você, hoje, testar a lib significa 4 coisas:

## 1. Ver o componente isolado
Playground

## 2. Ver se visualmente continua bom
Teste visual

## 3. Ver se continua funcionando
Teste funcional

## 4. Ver se o projeto real não quebrou
Teste de integração

Esse é o caminho certo agora.

Não precisa começar com um laboratório gigante.
Comece com:
- playground
- checklist
- projeto real

Isso já resolve a maior parte dos problemas.
