import express from "express";
import dotenv from "dotenv";
import disheRouter from "./router/dishes.js";
import finalRouter from "./router/final.js";

import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL);
app.use("/order", disheRouter);
app.use("/order/final", finalRouter);

app.listen(4000, () => {
  console.log("server started at 4000");
});
