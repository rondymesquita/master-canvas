import { Card } from 'src/domain/model/card';

export type CardUpdateInputDTO = Required<
  Pick<Card, 'id' | 'content' | 'title'>
>;
