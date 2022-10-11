import { Inject, Injectable } from '@nestjs/common';
import { Health } from '../../domain/model/health';
import { IGetAppHealth } from '../../domain/usecase/ihealth.usecase';
import { version } from '../../../package.json';
import mongoose from 'mongoose';

@Injectable()
export class GetAppHealth implements IGetAppHealth {
  constructor() {}
  handle(): Health {
    const mongodbStatus =
      mongoose.connection.readyState === 1 ? 'ok' : 'unhealthy';
    return {
      name: 'api',
      version,
      status: mongodbStatus,
      services: [{ name: 'mongodb', status: mongodbStatus }],
    };
  }
}
