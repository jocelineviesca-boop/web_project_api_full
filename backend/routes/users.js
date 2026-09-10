const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

router.get('/', (req, res) => res.send({ message: 'Ruta de usuarios' }));

module.exports = router;