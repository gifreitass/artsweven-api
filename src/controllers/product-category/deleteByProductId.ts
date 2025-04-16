import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductCategoryModels } from "../../models/product-category/productCategory";

interface IQueryProps {
    productId?: number
}

const deleteProductCategoryController = async (req: Request<any, any, any, IQueryProps>, res: Response<ResponsePayload<boolean>>) => {
    try {
        if (!req.query.productId) {
            res.status(400).json({ error: { message: `O id do produto deve ser informado` } })
            return
        }

        const existProduct = await ProductCategoryModels.getProductAndCategory(Number(req.query.productId), null)

        if (existProduct.length === 0) {
            res.status(400).json({ error: { message: `O registro com o produto de id ${req.query.productId} não existe` } })
            return
        }

        await ProductCategoryModels.deleteProductCategory(Number(req.query.productId))

        res.status(204).send()
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default deleteProductCategoryController