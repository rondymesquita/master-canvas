import { Injectable } from '@nestjs/common';
import { Card } from 'src/domain/model/card';
import {
  ICardRepo,
  IListCardInput,
  ISaveCardRepoInput,
  IUpdateCardRepoInput,
} from 'src/app/service/repo/icard.repo';
import { CardAdapter } from '../adapter/card.adapter';
import { CardModel } from '../model/card.model';

@Injectable()
export class CardRepo implements ICardRepo {
  async save(input: ISaveCardRepoInput): Promise<Card> {
    const model = new CardModel(input);
    const data = await model.save();
    return CardAdapter.adapt(data);
  }
  async list(input: IListCardInput): Promise<Card[]> {
    const data = await CardModel.find({ active: true, canvas: input.canvas });
    return CardAdapter.adaptList(data);
  }
  async getById(id: string): Promise<Card> {
    const data = await CardModel.findById(id);
    return CardAdapter.adapt(data);
  }
  async update(input: IUpdateCardRepoInput): Promise<Card> {
    const data = await CardModel.findByIdAndUpdate(input.id, input);
    return CardAdapter.adapt(data);
  }
  async remove(id: string): Promise<boolean> {
    const data = await CardModel.findByIdAndUpdate(id, { active: false });
    return Promise.resolve(true);
  }
}
