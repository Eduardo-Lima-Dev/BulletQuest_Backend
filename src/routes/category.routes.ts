import { Router } from "express";

const routerCategory = Router();

//get all category
routerCategory.get('/');

//get by id category
routerCategory.get('/:id');

//create category
routerCategory.post('/');

//update category by id
routerCategory.put('/:id');

//delete category by id
routerCategory.delete('/:id');