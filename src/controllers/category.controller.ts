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

async function createCategory(req: Request, res: Response) {
    const {title} = req.body;
    try {
        const category = await categoryService.createCategory(title);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({message:"Erro ao criar categorias"});
    }
}

export const categoryController = {
    getCategorys,
    createCategory
}
