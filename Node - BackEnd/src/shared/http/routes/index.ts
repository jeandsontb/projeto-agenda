import { Router } from 'express';
import contactsRouter from '@modules/contacts/routes/contacts.routes';
import userRouter from '@modules/user/routes/user.routes';
import sessionRouter from '@modules/user/routes/session.routes';

const routes = Router();

routes.use('/contacts', contactsRouter);
routes.use('/user', userRouter);
routes.use('/session', sessionRouter);

export default routes;
