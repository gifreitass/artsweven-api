import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductModel } from "../../models/product/product";
import * as yup from 'yup'

interface IParamProps {
    id: number
}

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

const updateProductController = async (req: Request<IParamProps, any, IBodyProps>, res: Response<ResponsePayload>) => {
    try {
        const existProduct = await ProductModel.getProductById(Number(req.params.id))

        if (!existProduct) {
            res.status(400).json({ error: { message: `O produto de id ${req.params.id} não existe` } })
        }

        await createSchema.validate(req.body)

        const result = await ProductModel.updateProduct(Number(req.params.id), req.body)

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default updateProductController