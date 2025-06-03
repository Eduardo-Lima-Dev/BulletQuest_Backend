import { Response, Request } from "express";
import { categoryService } from "../services/category.service";

async function getCategorys(req: Request, res: Response) {
    try {
        const categorys = await categoryService.getCategorys();
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json({message:"Erro ao buscar categorias"});
    }
}

export const categoryController = {
    getCategorys,
}
