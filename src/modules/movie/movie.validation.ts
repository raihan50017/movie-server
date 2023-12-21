import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { validationHandler } from "../../common/validation.common";

const schema = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).required(),
  overview: Joi.string().alphanum().min(3).max(300).required(),
  release_date: Joi.date().required(),
  genres: [Joi.string().required()],
  runtime: Joi.number().required(),
  director: Joi.string().required(),
  cast: [Joi.string().required()],
  trailer_url: Joi.string().required(),
});

const movieValidation = validationHandler({ body: schema });

export { movieValidation };
