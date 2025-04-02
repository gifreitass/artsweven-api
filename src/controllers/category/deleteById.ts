import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { CategoryModel } from "../../models/category/category";
import { ProductCategoryModels } from "../../models/product-category/productCategory";

interface IParamProps {
    id: number
}

const deleteCategoryController = async (req: Request<IParamProps>, res: Response<ResponsePayload>) => {
    try {
        const existCategory = await CategoryModel.getCategoryById(Number(req.params.id))

        if (!existCategory) {
            res.status(400).json({ error: { message: `A categoria de id ${req.params.id} não existe` } })
            return
        }

        const associatedCategory = await ProductCategoryModels.getProductsByCategory(Number(req.params.id))

        if (associatedCategory.length > 0) {
            res.status(400).json({ error: { message: `A categoria está associada a um produto` } })
            return
        }

        await CategoryModel.deleteCategory(Number(req.params.id))

        res.status(204).send()
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default deleteCategoryController