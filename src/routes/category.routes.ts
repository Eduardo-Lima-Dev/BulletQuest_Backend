import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { newCategorySchema, updateCategorySchema, deleteCategorySchema } from "../schemas/category";
import { validateId } from "../middlewares/validateId";

const routerCategory = Router();

routerCategory.get('/',isAuth,categoryController.getCategorys);

routerCategory.post('/',isAuth,validate(newCategorySchema),categoryController.createCategory);

routerCategory.put('/',isAuth,validate(updateCategorySchema),validateId.category,categoryController.updateCategory);

routerCategory.delete('/',isAuth,validate(deleteCategorySchema),validateId.category,categoryController.deleteCategory);

export default routerCategory;