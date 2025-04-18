import { Request, Response } from "express";
import * as yup from 'yup'
import { ResponsePayload } from "../../types/express.types";
import { CategoryModel } from "../../models/category/category";
import { Category } from "@prisma/client";
interface IBodyProps {
    name: string,
    enabled: boolean
}

const createSchema = yup.object({
    name: yup.string().required(),
    enabled: yup.boolean()
})

const createCategoryController = async (req: Request<any, any, IBodyProps>, res: Response<ResponsePayload<Category>>) => {
    try {
        await createSchema.validate(req.body)

        const result = await CategoryModel.createCategory(req.body)

        res.status(201).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: {
            message: error.message
        } })
    }
}

export default createCategoryController