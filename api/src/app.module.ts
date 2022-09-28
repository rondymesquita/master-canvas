import { CardModule } from './main/canvas.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './main/auth.module';

@Module({
  imports: [AuthModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
