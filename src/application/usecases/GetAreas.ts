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
        title: 'Realizar estudo de viabilidade do projeto',
        category: 'viabilidade',
        icon: '',
      },
      {
        id: v4(),
        title: 'Entender o problema de negócios e da aplicabilidade de IA',
        category: 'negocios',
        icon: '',
      },
      {
        id: v4(),
        title:
          'Descobrir os requisitos do usuário, do sistema, modelo de IA e dos dados',
        category: 'requisitos',
        icon: '',
      },
      {
        id: v4(),
        title: 'Priorizar e negociar os requisitos',
        category: 'priorizar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Escrever os requisitos do usuário, do sistema e dos dados',
        category: 'escrever',
        icon: '',
      },
      {
        id: v4(),
        title:
          'Verificar os requisitos funcionais, não funcionais, modelo de IA',
        category: 'verificar',
        icon: '',
      },
      {
        id: v4(),
        title:
          'Gerenciar os requisitos funcionais, não funcionais, modelo de IA e dos dados',
        category: 'gerenciar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Coletar dados',
        category: 'coletar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Explorar os dados',
        category: 'explorar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Escolher um modelo',
        category: 'escolher',
        icon: '',
      },
      {
        id: v4(),
        title: 'Preparar os dados',
        category: 'preparar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Construir, treinar e avaliar o modelo',
        category: 'construir',
        icon: '',
      },
      {
        id: v4(),
        title: 'Implantar o modelo',
        category: 'implantar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Ajudar o modelo de IA',
        category: 'ajustar',
        icon: '',
      },
      {
        id: v4(),
        title: 'Riscos',
        category: 'riscos',
        icon: '',
      },
    ];
    return data;
  }
}
