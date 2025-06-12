import { Router } from "express";
import { taskController } from "../controllers/task.controller";

import { isAuth } from "../middlewares/isAuth";
import { validate } from "../middlewares/validate";
import { validateId } from "../middlewares/validateId";
import { newTaskSchema, updateTaskSchema } from "../schemas/task";

const taskRouter = Router();

taskRouter.get('/',isAuth,taskController.getTasks);

taskRouter.post('/',isAuth,validate(newTaskSchema),validateId.category,validateId.user,taskController.createTask);

taskRouter.put('/:taskId',isAuth,validate(updateTaskSchema),validateId.task,validateId.category,validateId.user,taskController.updateTask);

taskRouter.delete('/:taskId',isAuth,validateId.task,taskController.deleteTask);

export default taskRouter;