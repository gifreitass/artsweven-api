import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductModel } from "../../models/product/product";

interface IParamProps {
    id: number
}

const deleteProductController = async (req: Request<IParamProps>, res: Response<ResponsePayload>) => {
    try {
        const existProduct = await ProductModel.getProductById(Number(req.params.id))

        if (!existProduct) {
            res.status(400).json({ error: { message: `O produto de id ${req.params.id} não existe` } })
        }

        await ProductModel.deleteProduct(Number(req.params.id))

        res.status(204).send()
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default deleteProductController