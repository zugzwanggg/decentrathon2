import { Router } from "express";
import { getData } from "../controllers/authController.js";

export const authRouter = Router();

authRouter.get('/data', getData);