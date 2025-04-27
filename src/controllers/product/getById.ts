import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductModel } from "../../models/product/product";
import { Product } from "@prisma/client";

interface IParamProps {
    id: string
}

const getProductByIdController = async (req: Request<IParamProps>, res: Response<ResponsePayload<Product>>) => {
    try {
        const result = await ProductModel.getProductById(Number(req.params.id))

        if (!result) {
            res.status(400).json({ error: { message: `O produto de id ${req.params.id} não existe` } })
            return
        }

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default getProductByIdController