import axios, { AxiosInstance } from 'axios';
import { Env } from '../../config/env';

export class HealthService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: `${Env.getEnv().API_HOST}/health`,
      withCredentials: true,
    });
  }
  async get() {
    const res = await this.client.get('/');
    return res;
  }
}
