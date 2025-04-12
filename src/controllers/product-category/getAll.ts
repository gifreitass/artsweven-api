import { Request, Response } from "express"
import { ResponsePayload } from "../../types/express.types"
import { ProductCategoryModels } from "../../models/product-category/productCategory"
import { SelectProductCategory } from "../../types/productCategory.types"

interface IQueryProps {
    productId?: number,
    categoryId?: number
}

const getProductCategoryController = async (req: Request<any, any, any, IQueryProps>, res: Response<ResponsePayload<SelectProductCategory[]>>) => {
    try {
        const productId = Number(req.query.productId)
        const categoryId = Number(req.query.categoryId)

        if (productId) {
            const productsCategories = await ProductCategoryModels.getProductAndCategory(productId, null)
            res.status(200).json({ data: productsCategories })
            return
        }

        if (categoryId) {
            const productsCategories = await ProductCategoryModels.getProductAndCategory(null, categoryId)
            res.status(200).json({ data: productsCategories })
            return
        }

        res.status(400).json({ error: { message: 'O id do produto ou o id da categoria deve ser informado' } })
    } catch (error: any) {
        res.status(400).json({ error: { message: error.message } })
    }
}

export default getProductCategoryController