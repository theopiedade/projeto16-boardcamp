import { Router } from "express"
import { getGames, postGames } from "../controllers/games.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaGame  } from "../schemas/games.schemas.js";

const recipeRouter = Router()

recipeRouter.get("/games", getGames)
recipeRouter.post("/games", validateSchema(schemaGame), postGames)


export default recipeRouter