import { Card } from './card';
import { BaseModel } from './_base';

export interface Canvas {
  id?: string;
  active?: boolean;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: string;

  // cards: Card[];
}
