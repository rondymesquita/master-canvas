import { AreaModel } from '../../domain/model/area';
import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { CardCategory } from '../../domain/model/card';

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
        title: 'Requisitos de dados',
        category: 'DATA',
        icon: '',
      },
      {
        id: v4(),
        title: 'Riscos',
        category: 'RISK',
        icon: '',
      },
      {
        id: v4(),
        title: 'Critérios de Aceitação Geral',
        category: CardCategory.ACCEPTANCE.toString(),
        icon: '',
      },
    ];
    return data;
  }
}
