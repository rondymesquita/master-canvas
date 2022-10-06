import { IListCardInput, IRemoveCard } from './../../domain/usecase/card';
import { Inject, Injectable } from '@nestjs/common';
import { Card } from 'src/domain/model/card';
import { IListCard, ISaveCard, SaveCardOutput } from 'src/domain/usecase/card';
import { ICardRepo } from '../service/repo/icard.repo';

@Injectable()
export class SaveCard implements ISaveCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(input: Card): Promise<Card> {
    return await this.cardRepo.save(input);
  }
}

@Injectable()
export class ListCard implements IListCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(input: IListCardInput): Promise<Card[]> {
    return await this.cardRepo.list(input);
  }
}

@Injectable()
export class RemoveCard implements IRemoveCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(id: string): Promise<boolean> {
    return await this.cardRepo.remove(id);
  }
}
