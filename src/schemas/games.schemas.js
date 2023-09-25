import Joi from "joi"

export const schemaGame = Joi.object({
	name: Joi.string().required(),
	image: Joi.string(),
	stockTotal: Joi.number().integer().min(0).required(),
	pricePerDay: Joi.number().integer().min(0).required()
})