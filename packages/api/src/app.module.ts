import { Module } from '@nestjs/common';
import { AppController } from './presentation/controller/app.controller';
import { AuthModule } from './main/ioc/auth.module';
import { CardModule } from './main/ioc/card.module';
import { CanvasModule } from './main/ioc/canvas.module';

import { ConfigModule } from '@nestjs/config';
import { Env } from './config/env';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './infra/service/auth/google.strategy';
import { GoogleSerializer } from './infra/service/auth/passport.serializer';
import { AuthGuard } from './infra/guard/auth.guard';
import { LogoutGuard } from './infra/guard/logout.guard';
import { HealthModule } from './main/ioc/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [Env], isGlobal: true }),
    AuthModule,
    CardModule,
    CanvasModule,
    HealthModule,
    PassportModule.register({
      defaultStrategy: 'local',
      session: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    GoogleStrategy,
    GoogleSerializer,
    // LoginGuard,
    LogoutGuard,
    AuthGuard,
  ],
})
export class AppModule {}
