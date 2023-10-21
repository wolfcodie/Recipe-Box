import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { recipeRouter } from "./routes/recipes.route.js";
import { userRouter } from "./routes/user.route.js";
//envirment variables
const uri = process.env.URI;
const PORT = process.env.PORT;

//server
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use("/api/recipes", recipeRouter);
app.use("/api/users", userRouter);

//connection to db
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT);
  })
  .catch((e) => {
    console.log("error");
  });
