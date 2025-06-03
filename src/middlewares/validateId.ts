import { Request, Response, NextFunction} from "express";
import prisma from "../config/prisma";

export async function category(req: Request, res: Response, next: NextFunction ) {
    const {id} = req.body;
    try {
        const validItem = await prisma.category.findUnique({
            where: {
                id: id
            }
        })
        if(validItem) {
            next();
        } else {
           res.status(400).json({message:"Informações invalidas ou id inexistente"}); 
        }
    } catch(error) {
        res.status(500).json({message:"Error ao atualizar categorias"});
    }
}

export const validateId = {
    category
}