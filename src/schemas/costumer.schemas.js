import Joi from "joi"

export const schemaCostumer = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().min(10).max(11),
	cpf: Joi.string().min(11).required(),
	birthday: Joi.number().integer().min(0).required()
})