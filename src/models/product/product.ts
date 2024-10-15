import { prisma } from "../../database/database-client"
import { IProduct } from "../../types/product.types"

const createProduct = async (product: IProduct) => {
    const result = await prisma.product.create({
        data: product
    })

    return result
}

const getProduct = async () => {
    const result = await prisma.product.findMany()

    return result
}

const getProductById = async (productId: number) => {
    const result = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    return result
}

const deleteProduct = async (productId: number) => {
    const result = await prisma.product.delete({
        where: {
            id: productId
        }
    })

    return result
}

const updateProduct = async (productId: number, product: IProduct) => {
    const result = await prisma.product.update({
        where: {
            id: productId
        },
        data: product
    })

    return result
}

export const ProductModel = {
    createProduct,
    getProduct, 
    getProductById,
    deleteProduct,
    updateProduct
}