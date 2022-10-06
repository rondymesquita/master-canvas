import { User } from '../model/User';

export interface IFindOrSaveUser {
  handle(input: User): Promise<User>;
}
