import { Card } from 'src/1.domain/model/card';

export type CardCreateInputDTO = Pick<Card, 'title' | 'content' | 'category'>;
