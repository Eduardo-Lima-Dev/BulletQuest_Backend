import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

export async function category(req: Request, res: Response, next: NextFunction) {
    const categoryId = req.body.categoryId || req.params.categoryId;
    if (categoryId && isNumeric(categoryId)) {
        try {
            const category = await prisma.category.findUnique({
                where: {
                    id: Number.parseInt(categoryId)
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
    } else {
        res.status(400).json({ message: "Informações invalidas ou id's inexistentes" });
    }
}

export async function user(req: Request, res: Response, next: NextFunction) {
    const userId = req.body.userId || req.params.userId;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
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

export async function task(req: Request, res: Response, next: NextFunction) {
    const taskId = req.body.taskId || req.params.taskId;
    if (taskId && isNumeric(taskId)) {
        try {
            const task = await prisma.task.findUnique({
                where: {
                    id: Number.parseInt(taskId)
                }
            });
            if (task) {
                next();
            } else {
                res.status(400).json({ message: "Informações invalidas ou id's inexistentes" });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno" });
        }
    } else {
        res.status(400).json({ message: "Informações invalidas ou id's inexistentes" });
    }
}

function isNumeric(value: string): boolean {
    return !Number.isNaN(parseFloat(value));
}

export const validateId = {
    category,
    user,
    task
}