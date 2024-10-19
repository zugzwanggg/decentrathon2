import express from "express";
import { authRouter } from "./routers/authRoute.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8080;

const app = express();
app.use('/api',authRouter);

app.listen(PORT, ()=> {
  console.log('Server succesfully started at port: ' + PORT);
})