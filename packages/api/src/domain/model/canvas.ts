import { Card } from './card';
import { User } from './user';
import { BaseModel } from './_base';

export interface Canvas {
  id?: string;
  active?: boolean;
  user?: User;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}
