import { IUserRepo } from './../service/repo/iuser.repo';
import { User } from './../../domain/model/user';
import { Inject, Injectable } from '@nestjs/common';
import { IFindOrSaveUser } from './../../domain/usecase/user';

@Injectable()
export class FindOrSaveUser implements IFindOrSaveUser {
  constructor(@Inject('IUserRepo') private cardRepo: IUserRepo) {}
  async handle(input: User): Promise<User> {
    return await this.cardRepo.findOrSave(input);
  }
}
