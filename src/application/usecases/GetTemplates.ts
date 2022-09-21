import { ModalEvent } from '../../domain/events';
import { AreaModel } from '../../domain/area';
import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { CardModel } from '../../domain/card';

export interface IGetTemplatesUseCase {
  execute: () => Promise<CardModel[]>;
}

export class GetTemplatesUseCase implements IGetTemplatesUseCase {
  private bus = Bus.getInstance();

  async execute(): Promise<CardModel[]> {
    console.log('GetTemplatesUseCase use case called');
    const data: CardModel[] = [];
    return data;
  }
}
