import { Response, Request, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import validate from "../helpers/validateJWT";

dotenv.config();

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if(authHeader) {
        try {
            const decoded = validate(authHeader);
            next();
        } catch (error) {
            res.status(403).json({message: "Token invalido ou expirado"});
        }
    } else {
        res.status(401).json({message: "Sem autorizacao"});
    }
}