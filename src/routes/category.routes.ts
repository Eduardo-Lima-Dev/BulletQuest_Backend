import { Router } from "express";
import { categoryController } from "../controllers/category.controller";

const routerCategory = Router();

//get all category
routerCategory.get('/',categoryController.getCategorys);
/*
//get by id category
routerCategory.get('/:id');

//create category
routerCategory.post('/');

//update category by id
routerCategory.put('/:id');

//delete category by id
routerCategory.delete('/:id');
*/
export default routerCategory;