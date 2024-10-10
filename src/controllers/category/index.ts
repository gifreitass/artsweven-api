import createCategoryController from "./create";
import deleteCategoryController from "./deleteById";
import getCategoryController from "./getAll";
import getCategoryByIdController from "./getById";
import updateCategoryController from "./updateById";

export const CategoryControllers = {
    createCategoryController,
    deleteCategoryController,
    getCategoryByIdController,
    getCategoryController,
    updateCategoryController
}