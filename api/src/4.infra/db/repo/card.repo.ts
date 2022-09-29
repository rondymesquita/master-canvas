import { Injectable } from '@nestjs/common';
import { Card } from 'src/1.domain/model/card';
import { ICardRepo } from 'src/2.app/service/repo/icard.repo';
import { CardAdapter } from '../adapter/card.adapter';
import { CardModel } from '../model/card.model';

@Injectable()
export class CardRepo implements ICardRepo {
  async list(): Promise<Card[]> {
    const data = await CardModel.find({});
    const cards = CardAdapter.adaptList(data);
    console.log('>>>', cards);
    return [];
  }
  async getById(id: string): Promise<Card> {
    const model = await CardModel.findById(id);
    return CardAdapter.adapt(model);
    // throw new Error('Method not implemented.');
  }
  async save(input: Card): Promise<void> {
    const model = new CardModel(input);
    const response = await model.save();
    console.log('saved', { response });
  }
}
