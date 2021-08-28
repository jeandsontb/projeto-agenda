import MessageError from '@shared/errors/MessageError';
import { getCustomRepository } from 'typeorm';
import { ContactRepository } from '../typeorm/repositories/ContactsRepository';

interface IContactRequest {
  id: number;
}

class DeleteContactsService {
  public async execute({ id }: IContactRequest): Promise<void> {
    const contactsRepository = getCustomRepository(ContactRepository);

    const contact = await contactsRepository.findOne(id);

    if (!contact) {
      throw new MessageError('Nome não encontrado');
    }

    await contactsRepository.remove(contact);
  }
}

export default DeleteContactsService;
