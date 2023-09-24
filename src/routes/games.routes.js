import { Router } from "express"
import { getGames, postGames } from "../controllers/games.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaGame  } from "../schemas/games.schemas.js";

const recipeRouter = Router()

recipeRouter.get("/games", getGames)
recipeRouter.post("/games", validateSchema(schemaGame), postGames)
recipeRouter.post("/receitas", validateSchema(schemaReceita), createRecipe)
recipeRouter.delete("/receitas/:id", deleteRecipe)
recipeRouter.delete("/receitas/muitas/:filtroIngredientes", deleteRecipesByIngredients)
recipeRouter.put("/receitas/:id", validateSchema(schemaReceita), editRecipe)
recipeRouter.put("/receitas/muitas/:filtroIngredientes", editRecipesByIngridients)

export default recipeRouter