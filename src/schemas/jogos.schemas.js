import Joi from "joi"

export const schemaJogo= Joi.object({
	name: Joi.string().required(),
	stockTotal: Joi.number().integer().min(0).required(),
	pricePerDay: Joi.number().integer().min(0).required()
})