import express from "express";
import {
  addRecipe,
  deleteRecipe,
  editRecipe,
  getAllRecipes,
} from "../controller/recipe.controller.js";

export const recipeRouter = express.Router();

//get all recipes
recipeRouter.get("/", getAllRecipes);
recipeRouter.post("/", addRecipe);
recipeRouter.delete("/:recipeId", deleteRecipe);
recipeRouter.patch("/:recipeId", editRecipe);
