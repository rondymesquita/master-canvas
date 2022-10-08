import { Card } from './card';
import { BaseModel } from './_base';

export interface Canvas {
  id?: string;
  active?: boolean;
  user?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
