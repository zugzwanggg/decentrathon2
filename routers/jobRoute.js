import { Router } from "express";
import { getJobs, createJob } from "../controllers/jobController";

export const jobRoute = Router();

jobRoute.post('/postJob', createJob);
jobRoute.get('/getJobs', getJobs);