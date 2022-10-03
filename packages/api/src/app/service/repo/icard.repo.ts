// import { Card } from 'src/4.infra/db/model/card.model';

import { Card } from 'src/domain/model/card';

export interface ICardRepo {
  save(input: Card): Promise<Card>;
  getById(id: string): Promise<Card>;
  list(): Promise<Card[]>;
  update(input: Card): Promise<Card>;
  remove(id: string): Promise<boolean>;
}
