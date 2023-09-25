import { Router } from "express"
import { getCustomers, createCustomers } from "../controllers/customers.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaCustomer } from "../schemas/customer.schemas.js";

const recipeRouter = Router()

recipeRouter.get("/customers", getCustomers)
recipeRouter.post("/customers", validateSchema(schemaCustomer), createCustomers)
recipeRouter.put("/customers/:id", validateSchema(schemaReceita), editRecipe)

export default recipeRouter