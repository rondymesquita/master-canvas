import { Card } from '../model/card';

export interface SaveCardOutput {}

export interface ISaveCard {
  handle(input: Card): SaveCardOutput;
}
