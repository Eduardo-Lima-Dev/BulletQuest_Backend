import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { newCategorySchema, updateCategorySchema } from "../schemas/category";
import { validateId } from "../middlewares/validateId";

const routerCategory = Router();

//get all category
routerCategory.get('/',isAuth,categoryController.getCategorys);

//create category
routerCategory.post('/',isAuth,validate(newCategorySchema),categoryController.createCategory);

//update category by id
routerCategory.put('/',isAuth,validate(updateCategorySchema),validateId,categoryController.updateCategory);

//routerCategory.delete('/:id');

/*
//get by id category
routerCategory.get('/:id');
//delete category by id

*/
export default routerCategory;