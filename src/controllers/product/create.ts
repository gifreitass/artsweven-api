import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import * as yup from 'yup'
import { ProductModel } from "../../models/product/product";

interface IBodyProps {
    name: string,
    description: string,
    value: number,
    image: string
}

const createSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    value: yup.number().required(),
    image: yup.string().required()
})

const createProductController = async (req: Request<any, any, IBodyProps>, res: Response<ResponsePayload>) => {
    try {
        await createSchema.validate(req.body)

        const result = await ProductModel.createProduct(req.body)

        res.status(201).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default createProductController