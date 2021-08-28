import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';
import MessageError from '@shared/errors/MessageError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof MessageError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('server starter on port 3333');
});
