import prisma from "../config/prisma"
import { Status } from "@prisma/client";

async function getTasks() {
    const tasks = await prisma.task.findMany();
    return tasks
}

async function createTask(title: string, score: number, userId: string, categoryId: number, description?: string) {
    const newTask = await prisma.task.create({
        data: {
            title: title,
            description: description,
            score: score,
            status: Status.TODO,
            user: { connect: { id: userId } },
            category: { connect: { id: categoryId } }
        }
    })
    return newTask;
}

export const taskService = {
    getTasks,
    createTask
}