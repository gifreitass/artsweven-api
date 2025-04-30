import { prisma } from "../../database/database-client"
import { IProduct } from "../../types/product.types"

const createProduct = async (product: Omit<IProduct, 'image'>) => {
    const result = await prisma.product.create({
        data: product
    })

    return result
}

const getProduct = async () => {
    const result = await prisma.product.findMany()

    return result
}

const getProductImageUrl = async () => {
    //ler o arquivo da pasta uploads
    //pegar url do arquivo 
}

//get product with image

const getProductById = async (productId: number) => {
    const result = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    return result
}

const getProductsById = async (productIds: number[]) => {
    const result = await prisma.product.findMany({
        where: {
            id: { in: productIds }
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

const updateProduct = async (productId: number, product: Omit<IProduct, 'image'>) => {
    const result = await prisma.product.update({
        where: {
            id: productId
        },
        data: product
    })

    return result
}

const updateProductImage = async (productId: number, pathImage: string) => {
    const result = await prisma.product.update({
        where: {
            id: productId 
        },
        data: {
            image: pathImage
        }
    })

    return result
}

export const ProductModel = {
    createProduct,
    getProduct, 
    getProductById,
    deleteProduct,
    updateProduct,
    getProductsById,
    updateProductImage
}