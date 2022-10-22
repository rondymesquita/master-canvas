import axios, { AxiosInstance } from 'axios';
import { Env } from '../../config/env';
import { CanvasModel } from '../../domain/canvas';

export class CanvasService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: `${Env.getEnv().API_HOST}/canvas`,
      withCredentials: true,
    });
  }
  async save(card: CanvasModel) {
    const res = await this.client.post('/', card);
    console.log({ res });
  }

  async update(card: CanvasModel) {
    const res = await this.client.put('/', card);
    console.log({ res });
  }

  async remove(id: string) {
    const res = await this.client.delete(`/${id}`);
    console.log({ res });
  }

  async list() {
    return await this.client.get('/');
  }

  async getById(id: string) {
    return await this.client.get(`/${id}`);
  }
}
