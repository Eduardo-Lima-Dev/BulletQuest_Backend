import { z } from "zod";

export const CategorySchema = z.object({
  title: z
    .string()
    .min(3, "Titulo deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-Z\s]+$/, "Titulo não deve conter caracteres especiais ou números"),
})
