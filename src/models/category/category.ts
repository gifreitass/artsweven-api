import { prisma } from "../../database/database-client";
import { ICategory } from "../../types/category.types";

const create = async (category: ICategory) => {
    const result = await prisma.category.create({
        data: category
    })

    return result
}

export const CategoryModel = {
    create
}