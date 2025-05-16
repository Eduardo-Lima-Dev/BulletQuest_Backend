import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import routerIndex from "./routes/indexRoute";
import sequelize from "./config/database/database";

const port = 3000;
const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger route
app.use(routerIndex);

async function startServer() {
    try {
        await sequelize.sync();
        console.log('Banco de dados sincronizado');
        app.listen(port, () => {
            console.log(`Server run ning on: http://localhost:${port}/`);
        });
    } catch (err) {
        console.log('Erro: ' + err);
    }
}

startServer();