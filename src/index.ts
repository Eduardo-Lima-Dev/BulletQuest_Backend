import express  from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import routerIndex from "./routes/indexRoute";

const port = 3000;
const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger route
app.use(routerIndex);

app.listen(port,()=>{
    console.log(`Server running on: http://localhost:${port}/`);
});