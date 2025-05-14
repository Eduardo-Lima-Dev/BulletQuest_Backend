import express  from "express";
import { Router, Request, Response } from "express";

const port = 3000;
const app = express();
const router = Router();

router.get('/',(req: Request,res: Response)=>{
    res.json({
        message: 'Server running'
    });
});

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Server running on: http://localhost:${port}/`);
});