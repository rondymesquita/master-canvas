import axios, { AxiosInstance } from 'axios';
import { Env } from '../../config/env';
import { CardModel } from '../../domain/card';

export class CardService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: `${Env.getEnv().API_HOST}/cards`,
    });
  }
  async save(card: CardModel) {
    const res = await this.client.post('/', card);
    console.log({ res });
  }

  async remove(id: string) {
    const res = await this.client.delete(`/${id}`);
    console.log({ res });
  }
}
