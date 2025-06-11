import { z } from "zod";
import { Status } from "@prisma/client";

const statusEnumZod = z.enum([Status.TODO, Status.DOING, Status.DONE]);

export const newTaskSchema = z.object({
    title: z
        .string()
        .min(3, "Titulo deve ter pelo menos 3 caracteres")
        .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
    
    score: z
        .number(),

    description: z
        .string()
        .max(255, "Descrição deve ter no máximo 255 caracteres")
        .optional(),

    status: statusEnumZod.optional(),
    
    userId: z
        .string(),

    categoryId: z
        .number()
});

export const updateTaskSchema = z.object({
    title: z
        .string()
        .min(3, "Titulo deve ter pelo menos 3 caracteres")
        .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
    
    score: z
        .number(),

    description: z
        .string()
        .max(255, "Descrição deve ter no máximo 255 caracteres")
        .optional(),

    status: statusEnumZod,
    
    userId: z
        .string(),

    categoryId: z
        .number()
});