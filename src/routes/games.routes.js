import { Router } from "express"
import { getGames, postGames } from "../controllers/games.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaGame  } from "../schemas/games.schemas.js";
import { schemaCustomer } from "../schemas/customer.schemas.js";
import { getCustomers, createCustomers, updateCustomers } from "../controllers/customers.controller.js"


const recipeRouter = Router()

recipeRouter.get("/games", getGames)
recipeRouter.post("/games", validateSchema(schemaGame), postGames)
recipeRouter.get("/customers", getCustomers)
recipeRouter.post("/customers", validateSchema(schemaCustomer), createCustomers)
recipeRouter.put("/customers/:id", validateSchema(schemaCustomer), updateCustomers)


export default recipeRouter