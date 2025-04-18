import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductModel } from "../../models/product/product";
import { Product } from "@prisma/client";

const getProductController = async (req: Request, res: Response<ResponsePayload<Product[]>>) => {
    try {
        const result = await ProductModel.getProduct()

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default getProductController