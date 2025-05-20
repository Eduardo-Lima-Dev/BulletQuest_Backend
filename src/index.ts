import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import routerIndex from "./routes/index.route";
import routerAuth from "./routes/auth.routes";

import sequelize from "./config/database/database";

const port = 3000;
const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger route
app.use('/api',routerIndex);
app.use('/api/auth',routerAuth);

async function startServer() {
    try {   
        await sequelize.sync();
        console.log('Banco de dados sincronizado com sucesso');
        app.listen(port,()=>{
            console.log(`Servidor rodando: http://localhost:${port}`);
        });
    } catch(err) {
        console.log(err)
    }
}

startServer();