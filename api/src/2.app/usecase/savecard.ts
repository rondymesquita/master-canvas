import { Inject, Injectable } from '@nestjs/common';
import { Card } from 'src/1.domain/model/card';
import { ISaveCard, SaveCardOutput } from 'src/1.domain/usecase/isavecard';
import { ICardRepo } from '../service/repo/icard.repo';

@Injectable()
export class SaveCard implements ISaveCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  async handle(input: Card): Promise<SaveCardOutput> {
    this.cardRepo.save({
      title: input.title,
      category: input.category,
      content: input.content,
    });
    return null;
  }
}
