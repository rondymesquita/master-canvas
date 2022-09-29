import { Injectable } from '@nestjs/common';
import { Card } from 'src/1.domain/model/card';
import { ICardRepo } from 'src/2.app/service/repo/icard.repo';
import { CardAdapter } from '../adapter/card.adapter';
import { CardModel } from '../model/card.model';

@Injectable()
export class CardRepo implements ICardRepo {
  async save(input: Card): Promise<Card> {
    const model = new CardModel(input);
    const data = await model.save();
    return CardAdapter.adapt(data);
  }
  async list(): Promise<Card[]> {
    const data = await CardModel.find({});
    return CardAdapter.adaptList(data);
  }
  async getById(id: string): Promise<Card> {
    const data = await CardModel.findById(id);
    return CardAdapter.adapt(data);
  }
  async update(input: Card): Promise<Card> {
    const data = await CardModel.findByIdAndUpdate(input.id, input);
    console.log(data);
    return CardAdapter.adapt(data);
  }
  async delete(id: string): Promise<boolean> {
    const data = await CardModel.findByIdAndUpdate(id, { active: false });
    console.log(data);
    return Promise.resolve(true);
  }
}
