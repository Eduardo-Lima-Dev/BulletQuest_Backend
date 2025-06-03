import prisma from "../config/prisma";
import dotenv from 'dotenv';

dotenv.config();

async function getCategorys() {
    const categorys = await prisma.category.findMany();
    return categorys;
}

export const categoryService = {
    getCategorys,
}