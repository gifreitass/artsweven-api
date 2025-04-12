import { ProductCategory } from "@prisma/client";
import { prisma } from "../../database/database-client";
import { SelectProductCategory } from "../../types/productCategory.types";

const createProductCategory = async (productCategory: Omit<ProductCategory, 'id'>) => {
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

const getProductAndCategory = async (productId: number | null, categoryId: number | null): Promise<SelectProductCategory[]> => {
    const result = await prisma.productCategory.findMany({
        where: {
            ...(productId !== null && { productId: productId }),
            ...(categoryId !== null && { categoryId: categoryId })     
        },
        select: {
            category: true,
            categoryId: true,
            productId: true,
            id: true,
            product: true
        }
    })

    return result
}

export const ProductCategoryModels = {
    createProductCategory,
    deleteProductCategory,
    getProductCategoryById,
    getProductAndCategory,
}