import { Request, Response } from "express";
import { taskService } from "../services/task.service";

async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json({message: "Erro ao buscar tarefa",error});
    }
}

async function createTask(req: Request, res: Response) {
    const {title,score,userId,categoryId,description} = req.body;
    try {
        const newTask = await taskService.createTask(title,score,userId,categoryId,description);
        res.status(201).json(newTask);
    } catch(error) {
        res.status(500).json({message: "Erro ao criar tarefa",error});
    }
}

async function updateTask(req: Request, res: Response) {
    const taskId = Number.parseInt(req.params.taskId);
    const {title,score,status,userId,categoryId,description} = req.body;
    try {
        const updatedTask = await taskService.updateTask(taskId,title,score,status,userId,categoryId,description);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar tarefa",error});
    }
}

async function deleteTask(req:Request, res:Response) {
    const taskId = Number.parseInt(req.params.taskId);
    try {   
        await taskService.deleteTask(taskId);
        res.sendStatus(204);
    } catch (error){
        res.status(500).json({message: "Error ao deletar tarefa",error});
    }
}

export const taskController = {
    getTasks,
    createTask,
    updateTask,
    deleteTask 
}