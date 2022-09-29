import { Inject, Injectable } from '@nestjs/common';
import { Card } from 'src/1.domain/model/card';
import {
  IListCard,
  ISaveCard,
  SaveCardOutput,
} from 'src/1.domain/usecase/isavecard';
import { ICardRepo } from '../service/repo/icard.repo';

@Injectable()
export class SaveCard implements ISaveCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(input: Card): Promise<SaveCardOutput> {
    return await this.cardRepo.save(input);
  }
}

export class ListCard implements IListCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(): Promise<Card[]> {
    return await this.cardRepo.list();
  }
}
