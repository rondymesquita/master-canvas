import { Card } from 'src/infra/db/model/card.model';

export interface ICardRepo {
  save(input: Card): Promise<void>;
}
