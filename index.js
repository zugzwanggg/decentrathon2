import express from "express";
import { authRouter } from "./routers/authRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',authRouter);

app.listen(PORT, ()=> {
  console.log('Server succesfully started at port: ' + PORT);
})