import { Router } from "express";

const routerIndex = Router();

/**
 * @swagger
 * api/:
 *   get:
 *     summary: Retorna se o servidor está rodando
 *     responses:
 *       200:
 *         description: Server running
 */
routerIndex.get('/',(req,res)=>{
    res.json({message:'Servidor rodando'});
});

export default routerIndex;