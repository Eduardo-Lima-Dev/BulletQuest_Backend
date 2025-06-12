import { Request, Response } from "express";
import { authService } from "../services/auth.service";

async function login(req: Request, res: Response) {
    const {email,password} = req.body;
    try {
        const token = await authService.login(email,password);
        res.status(200).json({token: token});
    } catch(error) {
        // Se for um erro conhecido (ex: erro de autenticação simples)
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
        // Erro inesperado (ex: erro interno no servidor) 
            res.status(500).json({ message: "Erro interno no servidor"});
        }
    }   
}

async function register(req: Request, res: Response) {
    const {username,email,name,password} = req.body;
    try {
        const user = await authService.register(username,email,name,password);
        res.status(201).json(user);
    } catch (erro){
        res.status(500).json({message: "Erro ao registrar usuario"});
    }
}

export const authController = {
    login,
    register,
}