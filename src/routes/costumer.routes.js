import { Router } from "express"
import { getClients, createClients } from "../controllers/costumer.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaGame  } from "../schemas/games.schemas.js";

const recipeRouter = Router()

recipeRouter.get("/clients", getClients)
recipeRouter.post("/clients", validateSchema(schemaGame), createClients)


export default recipeRouter