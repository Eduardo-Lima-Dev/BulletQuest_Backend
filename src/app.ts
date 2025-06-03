import express from "express";
import { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import routerIndex from "./routes/index.route";
import routerAuth from "./routes/auth.routes";
import routerCategory from "./routes/category.routes";
import taskRouter from "./routes/task.routes";

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger route
app.use('/api',routerIndex);
app.use('/api/auth',routerAuth);
app.use('/api/category',routerCategory);
app.use('/api/task',taskRouter);

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

export default app;