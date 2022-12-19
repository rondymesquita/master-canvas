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
        title: 'Requisitos Funcionais',
        category: 'FUNCTIONAL',
        icon: '',
      },
      {
        id: v4(),
        title: 'Requisitos Não Funcionais',
        category: 'NON_FUNCTIONAL',
        icon: '',
      },
      {
        id: v4(),
        title: 'Requisitos de Dados',
        category: 'DATA',
        icon: '',
      },
      {
        id: v4(),
        title: 'Riscos Gerais do Projeto',
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
