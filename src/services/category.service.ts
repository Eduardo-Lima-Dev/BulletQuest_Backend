import prisma from "../config/prisma";
import dotenv from 'dotenv';

dotenv.config();

async function getCategorys() {
    const categorys = await prisma.category.findMany();
    return categorys;
}

async function createCategory(title: string) {
    const category = await prisma.category.create({
        data: {
            title: title
        }
    });
    return category;
}

export const categoryService = {
    getCategorys,
    createCategory
}