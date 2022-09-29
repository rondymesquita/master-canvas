import { Card } from '../model/card';

export interface SaveCardOutput {}

export interface ISaveCard {
  handle(input: Card): SaveCardOutput;
}

export interface IGetByIdCard {
  handle(id: string): SaveCardOutput;
}

export interface IListCard {
  handle(): Promise<Card[]>;
}
