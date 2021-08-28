import { Request, Response } from 'express';
import CreateContactsService from '../services/CreateContatctsService';
import DeleteContactsService from '../services/DeleteContactsService';
import ListContactsService from '../services/ListContactsService';
import ShowContactsService from '../services/ShowContactsService';
import UpdateContactsService from '../services/UpdateContactsService';

export default class ContactsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listContacts = new ListContactsService();

    const contacts = await listContacts.execute();

    return res.json(contacts);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const showContact = new ShowContactsService();

    const contact = await showContact.execute({ name });

    return res.json(contact);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, lastname, phone, birth, address, email } = req.body;

    const createContact = new CreateContactsService();

    const contact = await createContact.execute({
      name,
      lastname,
      phone,
      birth,
      address,
      email,
    });

    return res.json(contact);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, lastname, phone, birth, address, email } = req.body;
    const { id } = req.params;

    const updateContact = new UpdateContactsService();

    const contact = await updateContact.execute({
      id: parseInt(id),
      name,
      lastname,
      phone,
      birth,
      address,
      email,
    });

    return res.json(contact);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteContact = new DeleteContactsService();

    await deleteContact.execute({ id: parseInt(id) });

    return res.json([]);
  }
}
