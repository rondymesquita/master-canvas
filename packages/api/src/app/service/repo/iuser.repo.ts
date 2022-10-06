import { User } from '../../../domain/model/User';

export interface IUserRepo {
  findOrSave(input: User): Promise<User>;
  // save(input: User): Promise<User>;
  // getById(id: string): Promise<User>;
  // list(): Promise<User[]>;
  // update(input: User): Promise<User>;
  // remove(id: string): Promise<boolean>;
}
