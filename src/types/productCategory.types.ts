import { Category, Product } from "@prisma/client"

export interface SelectProductCategory {
    category: Category,
    product: Product,
    id: number,
    categoryId: number,
    productId: number   
}