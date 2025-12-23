# Production Build

Aplicação pronta para hospedagem.

## Como fazer deploy

### Instalação
```bash
npm install
```

### Rodar a aplicação
```bash
node index.cjs
```

A aplicação estará disponível em `http://localhost:3000`

## Estrutura
- `index.cjs` - Servidor compilado
- `public/` - Assets do frontend (HTML, CSS, JS)
- `package.json` - Dependências

## Variáveis de Ambiente
Configure as seguintes variáveis antes de rodar:

```
NODE_ENV=production
PORT=3000
```

## Hospedagem recomendada
- Vercel
- Render
- Railway
- Heroku
- DigitalOcean

Qualquer uma delas fará o `npm install` automático e rodará `node index.cjs` como start script.
