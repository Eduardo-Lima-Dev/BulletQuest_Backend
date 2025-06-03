import { Request, Response } from "express";
import { taskService } from "../services/task.service";

async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json({message: "Erro ao buscar tarefa"});
    }
}

async function createTask(req: Request, res: Response) {
    const {title,score,userId,categoryId,description} = req.body;
    try {
        const newTask = await taskService.createTask(title,score,userId,categoryId,description);
        res.json(newTask);
    } catch(error) {

    }
}

export const taskController = {
    getTasks,
    createTask
}