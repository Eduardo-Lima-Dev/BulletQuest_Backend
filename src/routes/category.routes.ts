import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { categorySchema } from "../schemas/category";

const routerCategory = Router();

//get all category
routerCategory.get('/',isAuth,categoryController.getCategorys);

//create category
routerCategory.post('/',isAuth,validate(categorySchema),categoryController.createCategory);

/*
//get by id category
routerCategory.get('/:id');
//update category by id
routerCategory.put('/:id');
//delete category by id
routerCategory.delete('/:id');
*/
export default routerCategory;