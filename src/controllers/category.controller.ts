import { Response, Request } from "express";
import { categoryService } from "../services/category.service";

async function getCategorys(req: Request, res: Response) {
    try {
        const categorys = await categoryService.getCategorys();
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json({message:"Erro ao buscar categorias",error});
    }
}

async function createCategory(req: Request, res: Response) {
    const {title} = req.body;
    try {
        const category = await categoryService.createCategory(title);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({message:"Erro ao criar categoria",error});
    }
}

async function updateCategory(req: Request, res: Response) {
    const categoryId = Number.parseInt(req.params.categoryId);
    const {title} = req.body;
    try {
        const updatedCategory = await categoryService.updateCategory(categoryId,title);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar categoria",error})
    }
}

async function deleteCategory(req: Request, res: Response) {
    const categoryId = Number.parseInt(req.params.categoryId);
    try {
        await categoryService.deleteCategory(categoryId);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar categoria",error})
    }
}

export const categoryController = {
    getCategorys,
    createCategory,
    updateCategory,
    deleteCategory
}
