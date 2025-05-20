import bcrypt from 'bcrypt';
import User from '../models/User';
import { CreateUser } from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function login(email: string, password: string) {
    if (!email || !password) {
        throw new Error('Email e senha são obrigatorios');
    }
    const user = await User.unscoped().findOne({ where: { email: email } });
    if (!user) {
        throw new Error('Email ou senha incorretos');
    }
    const checkPassword = bcrypt.compare(password, user.passwordHash);
    if (!checkPassword) {
        throw new Error('Email ou senha incorretos');
    }
    const safeUser = user.toJSON() as any;
    delete safeUser.passwordHash;
    const options: jwt.SignOptions = {
        expiresIn: '1h'
    };
    const token = jwt.sign(safeUser, process.env.JWT_SECRET as string,options);
    return token;
}

async function register(username: string, name: string, email: string, password: string) {
    try {
        if (!email || !username || !name || !password) {
            throw new Error("Todos os campos são obrigatórios");
        }
        const newUser: CreateUser = {
            username: username,
            name: name,
            email: email,
            passwordHash: password
        }
        const user = await User.create(newUser);
        const safeUser = user.toJSON() as any; // força tipo flexível
        delete safeUser.passwordHash;
        return safeUser;
    } catch (err) {
        throw new Error('Erro ao fazer cadastro de usuario');
    }
}

export const authService = {
    login,
    register
}