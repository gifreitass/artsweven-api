import { Request, Response } from "express"
import { ResponsePayload } from "../../types/express.types"
import { Product } from "@prisma/client"
import { ProductModel } from "../../models/product/product";
import fs from 'fs'

interface UploadImageParams {
    productId: string;
}

const uploadImage = async (req: Request<UploadImageParams>, res: Response<ResponsePayload<Product>>) => {
    try {
        const { productId } = req.params
        const uploadedFile = req.file

        if (!uploadedFile) {
            res.status(400).json({ error: { message: `Nenhum arquivo localizado` } })
            return
        }

        const product = await ProductModel.getProductById(Number(productId))

        if (!product) {
            res.status(400).json({ error: { message: `O produto de id ${productId} não existe` } })
            return
        }

        if (product.image) {
            const imageExists = fs.existsSync(product.image)
            if (imageExists) {
                await fs.unlinkSync(product.image)
            }
        }

        const result = await ProductModel.updateProductImage(Number(productId), uploadedFile.path)
        res.status(200).json({ data: result })
        return
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default uploadImage