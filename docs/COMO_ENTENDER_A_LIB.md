# Como entender a lib @prodexy/ui

## Papel da lib
Esta lib não é um projeto final.
Ela é a **base visual compartilhada** entre seus projetos.

## O que um designer mexe aqui
- `src/styles.css`: tokens visuais, cores padrão, radius, tipografia base
- `src/components/ui/*`: aparência e comportamento visual dos componentes

## O que um dev de produto mexe no projeto cliente
- páginas
- menus
- regras de negócio
- integrações
- banco

## Como pensar a separação
### Lib
Tudo que é repetível visualmente

### Projeto cliente
Tudo que é específico da operação daquele cliente

## Branding por cliente
Cada projeto pode trocar:
- cor primária
- cores secundárias
- fonte
- logo

sem quebrar o design padrão.
