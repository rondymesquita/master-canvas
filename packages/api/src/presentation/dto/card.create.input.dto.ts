import { Card } from 'src/domain/model/card';

export type CardCreateInputDTO = Required<
  Pick<Card, 'title' | 'content' | 'category' | 'canvas'>
>;
