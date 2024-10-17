import { prisma } from "../../database/database-client";
import { IProductCategory } from "../../types/productCategory.types";

const createProductCategory = async (productCategory: IProductCategory) => {
    const result = await prisma.productCategory.create({
        data: productCategory
    })

    return result
}

const deleteProductCategory = async (productCategoryId: number) => {
    const result = await prisma.productCategory.delete({
        where: {
            id: productCategoryId
        }
    })

    return result
}

const getProductCategoryById = async (productCategoryId: number) => {
    const result = await prisma.productCategory.findUnique({
        where: {
            id: productCategoryId
        }
    })

    return result
}

export const ProductCategoryModels = {
    createProductCategory,
    deleteProductCategory,
    getProductCategoryById
}