import express from "express";
import {
  deleteUser,
  editUser,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";

export const userRouter = express.Router();

//get all recipes
userRouter.post("/", registerUser);
userRouter.get("/", loginUser);
userRouter.patch("/:userId", editUser);
userRouter.delete("/:userId", deleteUser);
