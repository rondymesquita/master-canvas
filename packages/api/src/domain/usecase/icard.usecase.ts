import { Card } from '../model/card';

export type ISaveCardInput = Required<
  Pick<Card, 'title' | 'content' | 'category' | 'canvas'>
>;
export interface ISaveCard {
  handle(input: ISaveCardInput): Promise<Card>;
}

export type IUpdateCardInput = Required<
  Pick<Card, 'id' | 'title' | 'content' | 'status'>
>;
export interface IUpdateCard {
  handle(input: IUpdateCardInput): Promise<Card>;
}

export interface IGetByIdCard {
  handle(id: string): Card;
}

export interface IListCardInput {
  canvas: string;
}
export interface IListCard {
  handle(input: IListCardInput): Promise<Card[]>;
}

export interface IRemoveCard {
  handle(id: string): Promise<boolean>;
}
