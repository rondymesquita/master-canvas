import { UserSchema } from '../model/user.model';
import { User } from '../../../domain/model/user';
export class UserAdapter {
  static adaptList(data: UserSchema[]): User[] {
    return data.map((record: UserSchema) => {
      return this.adapt(record);
    });
  }
  static adapt(record: UserSchema) {
    const user: User = {
      // id: record._id.toString(),
      // active: record.active,
      name: record.name,
      email: record.email,
      picture: record.picture,
      // createdAt: record.createdAt,
      // updatedAt: record.updatedAt,
    };

    return user;
  }
}
