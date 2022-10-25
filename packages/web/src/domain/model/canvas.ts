import { CardModel } from './card';
import { UserModel } from './user';

export class CanvasModel {
  id: string;
  title: string;
  // cards: CardModel[];
  createdAt: string;
  updatedAt: string;
  user: UserModel;
}
