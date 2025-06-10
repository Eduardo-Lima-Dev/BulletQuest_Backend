import { Router } from "express";
import { taskController } from "../controllers/task.controller";

import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { validateId } from "../middlewares/validateId";
import { newTaskSchema } from "../schemas/task";

const taskRouter = Router();

taskRouter.get('/',isAuth,taskController.getTasks);

taskRouter.post('/',isAuth,validate(newTaskSchema),validateId.category,validateId.user,taskController.createTask);

taskRouter.put('/',isAuth,taskController.updateTask);

taskRouter.delete('/',isAuth,taskController.deleteTask);

export default taskRouter;