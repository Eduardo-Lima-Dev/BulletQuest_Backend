import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { CategorySchema } from "../schemas/category";
import { validateId } from "../middlewares/validateId";

const routerCategory = Router();

routerCategory.get('/',isAuth,categoryController.getCategorys);

routerCategory.post('/',isAuth,validate(CategorySchema),categoryController.createCategory);

routerCategory.put('/:categoryId',isAuth,validate(CategorySchema),validateId.category,categoryController.updateCategory);

routerCategory.delete('/:categoryId',isAuth,validateId.category,categoryController.deleteCategory);

export default routerCategory;