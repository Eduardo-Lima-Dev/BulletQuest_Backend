import { Router } from "express";
import { authController } from "../controllers/auth.controlller";

const routerAuth = Router();

/**/
routerAuth.post('/login',authController.login);

/**/
routerAuth.post('/register',authController.register);

export default routerAuth;