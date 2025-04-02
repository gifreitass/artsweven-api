import { Request, Response } from "express";
import { ResponsePayload } from "../../types/express.types";
import { ProductModel } from "../../models/product/product";
import { ProductCategoryModels } from "../../models/product-category/productCategory";

interface IQueryProps {
    categoryId?: number
}

const getProductController = async (req: Request<any, any, any, IQueryProps>, res: Response<ResponsePayload>) => {
    try {
        if (req.query.categoryId) {
            const products = await ProductCategoryModels.getProductsByCategory(Number(req.query.categoryId))
            const productsId = products.map((product) => {
                return product.productId
            })
            const result = await ProductModel.getProductsById(productsId)
            res.status(200).json({ data: result })
            return
        }

        const result = await ProductModel.getProduct()

        res.status(200).json({ data: result })
    } catch (error: any) {
        res.status(404).json({ error: { message: error.message } })
    }
}

export default getProductController