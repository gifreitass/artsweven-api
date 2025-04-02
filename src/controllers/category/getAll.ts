import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { CategoryModel } from "../../models/category/category";
import { ProductCategoryModels } from "../../models/product-category/productCategory";

interface IQueryProps {
    productId?: number
}

const getCategoryController = async (req: Request<any, any, any, IQueryProps>, res: Response<ResponsePayload>) => {
    try {
        //retornar as categorias de um produto
        if (req.query.productId) {
            const productCategories = await ProductCategoryModels.getCategoriesByProduct(Number(req.query.productId))
            const categoryIds = productCategories.map((productCategory) => {
                return productCategory.categoryId
            })
            const result = await CategoryModel.getCategoriesById(categoryIds)
            res.status(200).json({ data: result })
            return
        }

        const result = await CategoryModel.getCategory()

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(404).json({ error: { message: error.message } })
    }
}

export default getCategoryController