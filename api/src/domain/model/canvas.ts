import { Card } from './card';
import { BaseModel } from './_base';

export interface Canvas extends BaseModel {
  id?: string;
  active?: boolean;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  // cards: Card[];
}
