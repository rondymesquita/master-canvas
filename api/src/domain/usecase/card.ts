import { Card } from '../model/card';

export interface SaveCardOutput {}

export interface ISaveCard {
  handle(input: Card): Promise<Card>;
}

export interface IGetByIdCard {
  handle(id: string): SaveCardOutput;
}

export interface IListCard {
  handle(): Promise<Card[]>;
}

export interface IRemoveCard {
  handle(id: string): Promise<boolean>;
}
