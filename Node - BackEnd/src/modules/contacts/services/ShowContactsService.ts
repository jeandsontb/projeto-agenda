import MessageError from '@shared/errors/MessageError';
import { getCustomRepository } from 'typeorm';
import Contact from '../typeorm/entities/Contact';
import { ContactRepository } from '../typeorm/repositories/ContactsRepository';

interface IContactRequest {
  name: string;
}

class ShowContactsService {
  public async execute(name: IContactRequest): Promise<Contact[]> {
    const contactsRepository = getCustomRepository(ContactRepository);

    const contact = await contactsRepository.find(name);

    if (!contact) {
      throw new MessageError('Nome não encontrado');
    }

    return contact;
  }
}

export default ShowContactsService;
