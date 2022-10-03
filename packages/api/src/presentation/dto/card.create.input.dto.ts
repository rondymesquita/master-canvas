import { Card } from 'src/domain/model/card';

export type CardCreateInputDTO = Pick<
  Card,
  'title' | 'content' | 'category' | 'canvas'
>;
