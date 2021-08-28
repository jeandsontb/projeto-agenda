import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import MessageError from '@shared/errors/MessageError';
import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new MessageError('JWT não informado!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new MessageError('Inválido JWT Token. ');
  }
}
