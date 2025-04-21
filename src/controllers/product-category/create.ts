import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import * as yup from 'yup'
import { ProductCategoryModels } from "../../models/product-category/productCategory";
import { ProductCategory } from "@prisma/client";

interface IBodyProps {
    categoryId: number,
    productId: number
}

const createSchema = yup.object({
    categoryId: yup.number().required(),
    productId: yup.number().required()
})

const createProductCategoryController = async (req: Request<any, any, IBodyProps>, res: Response<ResponsePayload<ProductCategory>>) => {
    try {
        await createSchema.validate(req.body)

        const result = await ProductCategoryModels.createProductCategory(req.body)

        if (!result) {
            res.status(400).json({ error: { message: 'O produto já está associado com a categoria' } })
            return
        }

        res.status(201).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default createProductCategoryController