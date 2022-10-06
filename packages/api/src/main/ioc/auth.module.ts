import { UserRepo } from './../../infra/db/repo/user.repo';
import { FindOrSaveUser } from './../../app/usecase/user';
import { AuthController } from '../../presentation/controller/auth.controller';
import { Module } from '@nestjs/common';
import { GoogleStrategy } from '../../infra/service/auth/google.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    {
      provide: 'IUserRepo',
      useClass: UserRepo,
    },
    {
      provide: 'IFindOrSaveUser',
      useClass: FindOrSaveUser,
    },
  ],
})
export class AuthModule {}
