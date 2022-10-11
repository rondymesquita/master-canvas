import { Module } from '@nestjs/common';
import { GetAppHealth } from '../../app/usecase/health.usecase';
import { HealhController } from '../../presentation/controller/health.controller';

@Module({
  imports: [],
  controllers: [HealhController],
  providers: [
    {
      provide: 'IGetAppHealth',
      useClass: GetAppHealth,
    },
  ],
})
export class HealthModule {}
