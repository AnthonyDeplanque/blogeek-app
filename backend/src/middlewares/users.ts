import { required } from "joi";

const Joi = require('joi');

const postUserValidationObject = {
  id: Joi.string().max(64).required(),
  first_name: Joi.string().max(50),
  last_name: Joi.string().max(50),
  nick_name: Joi.string().max(50).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).max(150).required(),
  hashed_password: Joi.string().max(64).required(),
  inscription_time: Joi.number().required(),
  avatar: Joi.string().max(250).allow(null, ''),
  biography: Joi.string().max(250).allow(null, ''),
}

const updateUserValidationObject = {
  first_name: Joi.string().max(50),
  last_name: Joi.string().max(50),
  nick_name: Joi.string().max(50),
  email: Joi.string().email({ minDomainSegments: 2 }).max(150),
  hashed_password: Joi.string().max(64),
  inscription_time: Joi.number(),
  avatar: Joi.string().max(250).allow(null, ''),
  biography: Joi.string().max(250).allow(null, ''),
}

const updateUserPasswordValidationObject = {
  hashed_password: Joi.string().max(64).required(),
}

const loginUserValidationObject = {
  email: Joi.string().email({ minDomainSegments: 2 }).max(150).required(),
  hashed_password: Joi.string().max(64).required(),
}

module.exports = { postUserValidationObject, updateUserPasswordValidationObject, updateUserValidationObject, loginUserValidationObject }