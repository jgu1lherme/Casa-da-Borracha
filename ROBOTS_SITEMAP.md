# Robots.txt e Sitemap - Configuração Atual e Futura

## ✅ Configuração Atual (GitHub Pages)

### robots.txt - Atualizado
- **URL correta**: `https://jgu1lherme.github.io/Casa-da-Borracha/sitemap.xml`
- Todos os bots permitidos (Google, Bing, Twitter, Facebook)
- Comentei instrução para quando tiver domínio próprio

### sitemap.xml - Atualizado
- **URL correta**: `https://jgu1lherme.github.io/Casa-da-Borracha/`
- Comentei instrução para quando tiver domínio próprio

## 🔄 Quando mudar para domínio próprio no Registro BR

### 1. **Editar robots.txt**
Troque a última linha de:
```txt
Sitemap: https://jgu1lherme.github.io/Casa-da-Borracha/sitemap.xml
```
Para:
```txt
Sitemap: https://seudominio.com.br/sitemap.xml
```

### 2. **Editar sitemap.xml**
Troque a linha `<loc>` de:
```xml
<loc>https://jgu1lherme.github.io/Casa-da-Borracha/</loc>
```
Para:
```xml
<loc>https://seudominio.com.br/</loc>
```

### 3. **Editar index.html**
Adicione ou atualize:
```html
<meta property="og:url" content="https://seudominio.com.br/" />
```

## 📋 Por que isso é importante?

### SEO
- Motores de busca usam o sitemap para indexar
- Evita conteúdo duplicado entre domínios
- Ajuda o Google a entender qual é o domínio "canônico"

### Social Media
- Quando compartilharem no Facebook/WhatsApp, vai mostrar o domínio correto
- OG image vai funcionar com o domínio certo

### Analytics
- Google Analytics e outras ferramentas usam o domínio
- Evita dados fragmentados entre domínios

## ⏰ Quando fazer essas mudanças?

1. **Após registrar o domínio no Registro BR**
2. **Após configurar o domínio no GitHub Pages**
3. **Antes de divulgar o novo domínio**

## 🎯 Importante

As configurações atuais funcionam perfeitamente para o GitHub Pages. Quando você tiver o domínio próprio, é só editar esses 3 arquivos:

1. `public/robots.txt` - linha 18
2. `public/sitemap.xml` - linha 8
3. `index.html` - adicionar meta tag og:url

## 🚀 Status Atual

✅ **Configurado para GitHub Pages** (jgu1lherme.github.io/Casa-da-Borracha)
✅ **Robots.txt** apontando para sitemap correto
✅ **Sitemap.xml** com URL correta
✅ **Instruções comentadas** para mudança futura

O site está pronto para deploy agora! Quando tiver domínio próprio, é só editar essas 3 linhas.
