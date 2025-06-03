import { Router } from "express";
import { taskController } from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get('/',taskController.getTasks);

taskRouter.post('/',taskController.createTask)

export default taskRouter;