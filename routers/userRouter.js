import { Router } from "express";
import { createUser, getUser } from "../controllers/userController.js";

export const authRouter = Router();

authRouter.post('/createUser', createUser);
authRouter.get('/getUser/:tg_id', getUser);