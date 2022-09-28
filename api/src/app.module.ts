import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './main/ioc/auth.module';
import { CardModule } from './main/ioc/canvas.module';

@Module({
  imports: [AuthModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
