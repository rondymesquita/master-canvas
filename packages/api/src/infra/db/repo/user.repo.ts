import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/model/User';
import { IUserRepo } from '../../../app/service/repo/iUser.repo';
import { UserAdapter } from '../adapter/User.adapter';
import { UserModel } from '../model/User.model';

@Injectable()
export class UserRepo implements IUserRepo {
  async findOrSave(input: User): Promise<User> {
    const user = await UserModel.findOne({ email: input.email });
    if (user) {
      return user;
    } else {
      const newUser = new UserModel(input);
      const savedUser = await newUser.save();
      return savedUser;
    }
  }
}
