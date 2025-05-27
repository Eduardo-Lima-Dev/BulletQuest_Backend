import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import routerIndex from "./routes/index.route";
import routerAuth from "./routes/auth.routes";

import { Request, Response, NextFunction } from "express";
const port = 3000;
export const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger route
app.use('/api',routerIndex);
app.use('/api/auth',routerAuth);

// Middleware para rotas não encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: `Rota ${req.method} ${req.originalUrl} não encontrada`,
  });
});

// Middleware para tratamento de erros gerais
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    message: "Erro interno no servidor",
    error: err.message,
  });
});

async function startServer() {
    app.listen(port,()=>{
        console.log(`Servidor rodando: http://localhost:${port}`);
    });
}

// Só inicia o servidor se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
    startServer();
}