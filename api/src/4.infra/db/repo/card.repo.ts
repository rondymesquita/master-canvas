import { Injectable } from '@nestjs/common';
import { ICardRepo } from 'src/2.app/service/repo/icard.repo';
import { CardModel, Card } from '../model/card.model';

@Injectable()
export class CardRepo implements ICardRepo {
  async save(input: Card): Promise<void> {
    const model = new CardModel(input);
    const response = await model.save();
    console.log('saved', { response });
  }
}
