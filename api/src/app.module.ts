import { Module } from '@nestjs/common';
import { AppController } from './presentation/controller/app.controller';
import { AuthModule } from './main/ioc/auth.module';
import { CardModule } from './main/ioc/card.module';

@Module({
  imports: [AuthModule, CardModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
