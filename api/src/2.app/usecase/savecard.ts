import { Inject, Injectable } from '@nestjs/common';
import {
  ISaveCard,
  SaveCardInput,
  SaveCardOutput,
} from 'src/1.domain/usecase/isavecard';
import { ICardRepo } from '../service/repo/icard.repo';

@Injectable()
export class SaveCard implements ISaveCard {
  constructor(@Inject('ICardRepo') private cardRepo: ICardRepo) {}
  handle(input: SaveCardInput): SaveCardOutput {
    this.cardRepo.save({
      title: input.title,
      category: input.category.toString(),
      content: input.content,
    });
    return null;
  }
}
