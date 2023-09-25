import Joi from "joi"

export const schemaCustomer = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().min(10).max(11),
	cpf: Joi.string().min(11).required(),
	birthday: Joi.date().required()
})