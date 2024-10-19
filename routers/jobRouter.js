import { Router } from "express";
import { getJobs, createJob } from "../controllers/jobController.js";

export const jobRouter = Router();

jobRouter.post('/postJob', createJob);
jobRouter.get('/getJobs', getJobs);