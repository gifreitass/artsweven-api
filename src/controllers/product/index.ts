import createProductController from "./create";
import deleteProductController from "./deleteById";
import getProductController from "./getAll";
import getProductByIdController from "./getById";
import updateProductController from "./updateById";

export const ProductControllers = {
    createProductController,
    getProductController,
    getProductByIdController,
    deleteProductController,
    updateProductController
}