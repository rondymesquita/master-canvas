// import { Card } from 'src/4.infra/db/model/card.model';

import { Card } from 'src/domain/model/card';

export interface IListCardInput {
  canvas: string;
}

export type ISaveCardRepoInput = Required<
  Pick<Card, 'title' | 'content' | 'category' | 'canvas'>
>;

export type IUpdateCardRepoInput = Required<
  Pick<Card, 'id' | 'title' | 'content' | 'status'>
>;

export interface ICardRepo {
  save(input: ISaveCardRepoInput): Promise<Card>;
  getById(id: string): Promise<Card>;
  list(input: IListCardInput): Promise<Card[]>;
  update(input: IUpdateCardRepoInput): Promise<Card>;
  remove(id: string): Promise<boolean>;
}
