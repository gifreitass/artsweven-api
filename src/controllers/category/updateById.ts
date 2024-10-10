import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { CategoryModel } from "../../models/category/category";
import * as yup from 'yup'
interface IParamProps {
    id: number
}

interface IBodyProps {
    name: string,
    enabled: boolean
}

const createSchema = yup.object({
    name: yup.string().required(),
    enabled: yup.boolean()
})

const updateCategoryController = async (req: Request<IParamProps, any, IBodyProps>, res: Response<ResponsePayload>) => {
    try {
        const existCategory = await CategoryModel.getCategoryById(Number(req.params.id))

        if (!existCategory) {
            res.status(400).json({ error: { message: `A categoria de id ${req.params.id} não existe` } })
        }

        await createSchema.validate(req.body)

        const result = await CategoryModel.updateCategory(Number(req.params.id), req.body)

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default updateCategoryController