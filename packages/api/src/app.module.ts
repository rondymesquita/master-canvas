import { Module } from '@nestjs/common';
import { AppController } from './presentation/controller/app.controller';
import { AuthModule } from './main/ioc/auth.module';
import { CardModule } from './main/ioc/card.module';
import { CanvasModule } from './main/ioc/canvas.module';

import { ConfigModule } from '@nestjs/config';
import { Env } from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [Env], isGlobal: true }),
    AuthModule,
    CardModule,
    CanvasModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
