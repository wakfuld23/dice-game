const Joi = require('joi');

const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required().custom(password),
  }),
};

const login = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
};
