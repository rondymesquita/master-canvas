import { AuthController } from '../presentation/controller/auth.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
