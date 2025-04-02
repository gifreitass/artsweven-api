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

const getCategoriesByProduct = async (productId: number) => {
    const result = await prisma.productCategory.findMany({
        where: {
            productId: productId,     
        }
    })

    return result
}

//posso ter mais de uma categoria informada como parametro
const getProductsByCategory = async (categoryId: number) => {
    const result = await prisma.productCategory.findMany({
        where: {
            categoryId: categoryId
        }
    })

    return result
}

export const ProductCategoryModels = {
    createProductCategory,
    deleteProductCategory,
    getProductCategoryById,
    getCategoriesByProduct,
    getProductsByCategory
}