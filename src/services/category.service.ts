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

async function updateCategory(id: number, title: string) {
    const category = await prisma.category.update({
        where : {
            id : id
        },
        data : {
            title: title
        }
    });
    return category;
}

async function deleteCategory(id:number) {
    await prisma.category.delete({
        where: {
            id:id
        }
    });
}

export const categoryService = {
    getCategorys,
    createCategory,
    updateCategory,
    deleteCategory
}