const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { updateUser, updateAvatar } = require('../controllers/users');

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) return value;
      return helpers.error('string.uri');
    }),
  }),
}), updateAvatar);

module.exports = router;