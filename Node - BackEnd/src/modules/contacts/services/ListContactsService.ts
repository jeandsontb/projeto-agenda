import { getCustomRepository } from 'typeorm';
import Contact from '../typeorm/entities/Contact';
import { ContactRepository } from '../typeorm/repositories/ContactsRepository';

class ListContactsService {
  public async execute(): Promise<Contact[]> {
    const contactsRepository = getCustomRepository(ContactRepository);

    const contacts = await contactsRepository.find();

    return contacts;
  }
}

export default ListContactsService;
