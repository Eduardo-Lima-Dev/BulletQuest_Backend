import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

export async function category(req: Request, res: Response, next: NextFunction) {
    var { id } = req.body;
    if (id == undefined) { var { categoryId } = req.body; id = categoryId; } //isso é muito feio
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: id
            }
        });
        if (category) {
            next();
        } else {
            res.status(400).json({ message: "Informações invalidas ou id's inexistentes" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro interno" });
    }
}

export async function user(req: Request, res: Response, next: NextFunction) {
    var { id } = req.body;
    if (id == undefined) { var { userId } = req.body; id = userId; } //isso é muito feio
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (user) {
            next();
        } else {
            res.status(400).json({ message: "Informações invalidas ou id's inexistentes" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro interno" });
    }
}

export const validateId = {
    category,
    user
}