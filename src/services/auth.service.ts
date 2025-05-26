import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';
import dotenv from 'dotenv';

dotenv.config();

async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (!user) {
        throw new Error("Email ou senha, incorretas");
    }
    const userPasswordCheck = await bcrypt.compare(password,user.password);
    if(userPasswordCheck) {
        const { password: _, ...userWithoutPassword } = user;
        const token = jwt.sign(userWithoutPassword,process.env.JWT_SECRET as string,{
            expiresIn: "1d", // Opcional: define tempo de expiração
        });
        return token;
    } else {
        throw new Error("Email ou senha, incorretas");
    }
}

async function register(username: string, email: string, name: string, password: string) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password,salt);
    const user = await prisma.user.create({
        data: {
            username: username,
            email: email,
            name: name,
            password: passwordHash
        }
    });
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

export const authService = {
    login,
    register
}