import { Card } from 'src/4.infra/db/model/card.model';

export interface ICardRepo {
  save(input: Card): Promise<void>;
}