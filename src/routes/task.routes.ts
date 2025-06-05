import { Router } from "express";
import { taskController } from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get('/',taskController.getTasks);

taskRouter.post('/',taskController.createTask);

taskRouter.put('/',taskController.updateTask);

taskRouter.delete('/',taskController.deleteTask);

export default taskRouter;