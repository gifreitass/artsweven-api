import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductCategoryModels } from "../../models/product-category/productCategory";

interface IParamProps {
    id: number
}

const deleteProductCategoryController = async (req: Request<IParamProps>, res: Response<ResponsePayload>) => {
    try {
        const existProductCategory = await ProductCategoryModels.getProductCategoryById(Number(req.params.id))

        if (!existProductCategory) {
            res.status(400).json({ error: { message: `O registro de id ${req.params.id} não existe` } })
        }

        await ProductCategoryModels.deleteProductCategory(Number(req.params.id))

        res.status(204).send()
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default deleteProductCategoryController