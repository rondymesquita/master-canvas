import { User } from '../model/user';

export interface IFindOrSaveUser {
  handle(input: User): Promise<User>;
}
