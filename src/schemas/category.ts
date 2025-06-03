import { z } from "zod";

export const newCategorySchema = z.object({
  title: z
    .string()
    .min(3, "Titulo deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
})

export const updateCategorySchema = z.object({
  id: z
    .number(),

  title: z
    .string()
    .min(3, "Titulo deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
})