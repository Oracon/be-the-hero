const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
/**
 * Query
 * Route
 * Body
 */
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(14),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}), OngController.create);//Primeiro ocorre a validação

routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(), //Pode-se usar para checar o uuid() ou regex()
   }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
   })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
   })
}), IncidentController.delete);

module.exports = routes;
