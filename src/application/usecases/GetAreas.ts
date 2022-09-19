import { ModalEvent } from '../../domain/events';
import { AreaModel } from '../../domain/area';
import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';

export interface IGetAreasUseCase {
  execute: () => Promise<AreaModel[]>;
}

export class GetAreasUseCase implements IGetAreasUseCase {
  private bus = Bus.getInstance();

  async execute(): Promise<AreaModel[]> {
    console.log('GetAreasUseCase use case called');
    const data = [
      {
        id: v4(),
        title: 'Escrever os requisitos funcionais',
        category: 'funcionais',
        icon: '',
      },
      {
        id: v4(),
        title: 'Escrever os requisitos não funcionais',
        category: 'nao-funcionais',
        icon: '',
      },
      {
        id: v4(),
        title: 'Escrever os requisitos das necessidades e coleta do dados',
        category: 'dados',
        icon: '',
      },
      {
        id: v4(),
        title: 'Riscos do produto',
        category: 'riscos',
        icon: '',
      },
    ];
    return data;
  }
}
