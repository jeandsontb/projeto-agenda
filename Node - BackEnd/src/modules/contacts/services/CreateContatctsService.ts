import MessageError from '@shared/errors/MessageError';
import { getCustomRepository } from 'typeorm';
import Contact from '../typeorm/entities/Contact';
import { ContactRepository } from '../typeorm/repositories/ContactsRepository';

interface IContactRequest {
  name: string;
  lastname: string;
  phone: string;
  birth: string;
  address: string;
  email: string;
}

class CreateContactsService {
  public async execute(data: IContactRequest): Promise<Contact> {
    const contactsRepository = getCustomRepository(ContactRepository);

    //verifica e certifica que apenas um email pode ser colocado no sistema
    const contactExists = await contactsRepository.findByName(data.email);

    if (contactExists) {
      throw new MessageError('Já existe um contato com esse e-mail na base.');
    }

    const contact = contactsRepository.create({
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      birth: data.birth,
      address: data.address,
      email: data.email,
    });

    await contactsRepository.save(contact);

    return contact;
  }
}

export default CreateContactsService;
