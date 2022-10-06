import { AuthController } from '../../presentation/controller/auth.controller';
import { Module } from '@nestjs/common';
import { GoogleStrategy } from '../../infra/service/auth/google.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [GoogleStrategy],
})
export class AuthModule {}
