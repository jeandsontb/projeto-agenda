import MessageError from '@shared/errors/MessageError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IUserRequest {
  email: string;
  password: string;
}

interface IUserResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({
    email,
    password,
  }: IUserRequest): Promise<IUserResponse> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new MessageError(
        'Acesso não autorizado! E-mail ou Senha inválidos',
        401,
      );
    }

    const verifyPassowrd = await compare(password, user.password);

    if (!verifyPassowrd) {
      throw new MessageError('Email ou Senha incorreta!', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;
