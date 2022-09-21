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
    const data: CardModel[] = [
      {
        id: v4(),
        title: 'Descritivo Básico',
        category: 'viabilidade',
        description: 'Descrição do curso o qual se deseja criar ou ajustar',
        content: `Qual area de atuação?
          Ex: Engenharia de Software',
          Pergunta
          Ex: Resposta`,
      },
      {
        id: v4(),
        title: 'Descritivo Básico',
        category: 'viabilidade',
        description: 'Descrição do curso o qual se deseja criar ou ajustar',
        content: `Qual area de atuação?
          Ex: Engenharia de Software',
          Pergunta
          Ex: Resposta`,
      },
      {
        id: v4(),
        title: 'Descritivo Básico',
        category: 'viabilidade',
        description: 'Descrição do curso o qual se deseja criar ou ajustar',
        content: `Qual area de atuação?
          Ex: Engenharia de Software',
          Pergunta
          Ex: Resposta`,
      },
      {
        id: v4(),
        title: 'Descritivo Básico',
        category: 'viabilidade',
        description: 'Descrição do curso o qual se deseja criar ou ajustar',
        content: `Qual area de atuação?
          Ex: Engenharia de Software',
          Pergunta
          Ex: Resposta`,
      },
    ];
    return data;
  }
}
