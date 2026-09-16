# Configuração do GitHub Pages

O projeto foi convertido de SSR (TanStack Start) para SPA estático e todas as dependências do Lovable foram removidas. Agora o projeto funciona como um site estático que pode ser hospedado no GitHub Pages.

## Configuração Manual no GitHub

1. **Vá ao repositório no GitHub**
2. **Settings > Pages**
3. **Em "Build and deployment":**
   - **Source**: Selecione "GitHub Actions"
4. **O workflow já está configurado** em `.github/workflows/deploy.yml`

## Como o projeto funciona agora

- **Tipo**: SPA (Single Page Application) estático
- **Build**: Produz arquivos na pasta `dist`
- **Deploy**: GitHub Actions faz o build automático e publica
- **Dependências do Lovable**: Todas removidas
- **Server-side rendering**: Removido (não funciona no GitHub Pages)

## Comandos úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Preview do build local
npm run preview
```

## Arquivos modificados

- `package.json`: Removidas dependências do Lovable e do TanStack Start
- `vite.config.ts`: Configurado para build estático padrão
- `src/main.tsx`: Criado entry point para SPA
- `index.html`: Criado HTML inicial
- `src/start.ts`: Removido (não necessário para SPA)
- `src/server.ts`: Removido (não necessário para SPA)
- `src/router.tsx`: Removido (funcionalidade movida para main.tsx)
- `src/lib/lovable-error-reporting.ts`: Removido
- `.github/workflows/deploy.yml`: Criado workflow para GitHub Pages

## Estrutura do projeto

```
Casa da Borracha/
├── dist/                # Arquivos gerados pelo build (deploy)
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   ├── routes/         # Rotas do TanStack Router
│   ├── main.tsx        # Entry point do SPA
│   └── styles.css      # Estilos globais
├── public/             # Arquivos estáticos (favicon, etc)
├── index.html          # HTML inicial
└── vite.config.ts      # Configuração do Vite
```

O site agora está pronto para ser hospedado no GitHub Pages! 🚀
