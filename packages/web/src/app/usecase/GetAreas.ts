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
    // console.log('GetAreasUseCase use case called');
    const data = [
      {
        id: v4(),
        title: 'Requisitos funcionais',
        category: 'FUNCTIONAL',
        icon: '',
      },
      {
        id: v4(),
        title: 'Requisitos não funcionais',
        category: 'NON_FUNCTIONAL',
        icon: '',
      },
      {
        id: v4(),
        title: 'Requisitos das necessidades e coleta do dados',
        category: 'DATA',
        icon: '',
      },
      {
        id: v4(),
        title: 'Riscos',
        category: 'RISK',
        icon: '',
      },
    ];
    return data;
  }
}
