## Problema

O build na Vercel falha com:

```
[vite:build-html] EISDIR: illegal operation on a directory, read
file: /vercel/path0/index.html
```

Causa: no `index.html` existe `<link rel="canonical" href="/" />`. O plugin `vite:build-html` resolve atributos `href` como assets durante o build. Como `/` aponta para a raiz do projeto (um diretório), `readFile` falha com `EISDIR`. No `vite dev` esse caminho não é processado, por isso o erro só aparece no build de produção.

## Correção

Editar `index.html` e trocar o canonical para uma URL absoluta (que o Vite não tenta ler do disco):

```html
<link rel="canonical" href="https://scalio-visit-flow.lovable.app/" />
```

(Alternativa equivalente: simplesmente remover a tag — pode ser adicionada depois no domínio final.)

## Validação

Após a edição, rodar `bun run build` localmente para garantir que o erro sumiu e o `dist/` é gerado, então refazer o deploy na Vercel.

## Arquivos alterados

- `index.html` — 1 linha
