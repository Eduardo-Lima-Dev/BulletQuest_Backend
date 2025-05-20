import { Request, Response } from "express";
import { authService } from "../services/auth.service";

async function login(req: Request, res: Response) {
    const {email,password} = req.body;
    try {
        const token = await authService.login(email,password);
        res.json({token:token});
    } catch(err) {
        res.status(400).json({message: err instanceof Error ? err.message : String(err)});
    }
}

async function register(req: Request, res: Response) {
    const {username,name,email,password} = req.body;
    try {
        const newUser = await authService.register(username,name,email,password)
        res.json(newUser);
    } catch(err) {
        res.status(500).json({message: err instanceof Error ? err.message : String(err)})
    }
}

export const authController = {
    login,
    register,
}