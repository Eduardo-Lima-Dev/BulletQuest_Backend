import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.format();
      res.status(400).json({ message: "Erro de validação", errors });
    } else {
        req.body = result.data;
        next();
    }
  };
}
