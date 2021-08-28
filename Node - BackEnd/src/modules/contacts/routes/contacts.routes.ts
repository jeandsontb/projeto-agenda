import { Router } from 'express';
import ContactsController from '../controllers/ContactsController';
import { celebrate, Joi, Segments } from 'celebrate';

const contactsRouter = Router();
const contactsController = new ContactsController();

contactsRouter.get('/', contactsController.index);

contactsRouter.get(
  '/:name',
  celebrate({
    [Segments.PARAMS]: {
      name: Joi.string().required(),
    },
  }),
  contactsController.show,
);

contactsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      lastname: Joi.string().required(),
      phone: Joi.string().required(),
      birth: Joi.string().required(),
      address: Joi.string().required(),
      email: Joi.string().required(),
    },
  }),
  contactsController.create,
);

contactsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      lastname: Joi.string().required(),
      phone: Joi.string().required(),
      birth: Joi.string().required(),
      address: Joi.string().required(),
      email: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  contactsController.update,
);

contactsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  contactsController.delete,
);

export default contactsRouter;
