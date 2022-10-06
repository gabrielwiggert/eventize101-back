import Joi from "joi";

export const eventSchema = Joi.object({
  title: Joi.string().required(),
  host: Joi.string().required(),
  dateTime: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required()
});