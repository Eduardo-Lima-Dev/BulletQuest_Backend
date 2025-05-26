import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-Z0-9_]+$/, "Username deve conter apenas letras, números e underline"),

  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-Z\s]+$/, "Nome não deve conter caracteres especiais ou números"),

  email: z
    .string()
    .email("Email inválido"),

  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "Senha deve conter pelo menos um número")
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Email inválido"),

  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "Senha deve conter pelo menos um número")
})