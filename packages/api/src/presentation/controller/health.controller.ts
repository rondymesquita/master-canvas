import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { version } from '../../../package.json';
import { IGetAppHealth } from '../../domain/usecase/ihealth.usecase';
import { HealthOutputDTO } from '../dto/health.output.dto';

@Controller('health')
@ApiTags('health')
export class HealhController {
  constructor(
    @Inject('IGetAppHealth') private readonly getAppHealth: IGetAppHealth,
  ) {}

  @Get()
  health(): HealthOutputDTO {
    const health = this.getAppHealth.handle();
    return health;
  }
}
