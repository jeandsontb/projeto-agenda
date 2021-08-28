import MessageError from '@shared/errors/MessageError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IUserRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new MessageError('E-mail já está em uso por outro usuário');
    }

    const cryptoPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: cryptoPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
