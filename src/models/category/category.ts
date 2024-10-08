import { prisma } from "../../database/database-client";
import { ICategory } from "../../types/category.types";

const createCategory = async (category: ICategory) => {
    const result = await prisma.category.create({
        data: category
    })

    return result
}

const deleteCategory = async (categoryId: number) => {
    const result = await prisma.category.delete({
        where: {
            id: categoryId
        }
    })

    return result
}

const getCategoryById = async (categoryId: number) => {
    const result = await prisma.category.findUnique({
        where: {
            id: categoryId
        }
    })

    return result
}

export const CategoryModel = {
    createCategory,
    deleteCategory,
    getCategoryById
}