import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  birth: string;

  @Column()
  address: string;

  @Column()
  email: string;
}

export default Contact;
