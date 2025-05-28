import app from './app';

const port = process.env.PORT || 3000;

async function startServer() {
  app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
  });
}

// Só inicia o servidor se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  startServer();
}