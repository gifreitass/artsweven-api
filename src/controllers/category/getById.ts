import { Request, Response } from "express"
import { ResponsePayload } from "../../types/express.types"
import { CategoryModel } from "../../models/category/category"
import { Category } from "@prisma/client"

interface IParamProps {
    id: number
}

const getCategoryByIdController = async (req: Request<IParamProps>, res: Response<ResponsePayload<Category>>) => {
    try {
        const result = await CategoryModel.getCategoryById(Number(req.params.id))

        if (!result) {
            res.status(400).json({ error: { message: `A categoria de id ${req.params.id} não existe` } })
            return
        }

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default getCategoryByIdController