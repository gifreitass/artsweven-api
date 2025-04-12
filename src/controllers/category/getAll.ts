import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { CategoryModel } from "../../models/category/category";
import { Category } from "@prisma/client";

const getCategoryController = async (req: Request, res: Response<ResponsePayload<Category[]>>) => {
    try {
        const result = await CategoryModel.getCategory()

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default getCategoryController