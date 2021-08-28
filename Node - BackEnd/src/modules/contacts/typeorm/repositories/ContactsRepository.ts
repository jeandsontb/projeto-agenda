import { EntityRepository, Repository } from 'typeorm';

import Contact from '../entities/Contact';

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {
  public async findByName(email: string): Promise<Contact | undefined> {
    const contact = this.findOne({
      where: [
        {
          email,
        },
      ],
    });

    return contact;
  }
}
