import { z } from "zod";

export const newTaskSchema = z.object({
    title: z
        .string()
        .min(3, "Titulo deve ter pelo menos 3 caracteres")
        .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
    
    score: z
        .number(),
    
    userId: z
        .string(),

    categoryId: z
        .number()
})