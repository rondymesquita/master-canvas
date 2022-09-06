import { ModalEvent } from '../../domain/events';
import { AreaModel } from '../../domain/area';
import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { TemplateModel } from '../../domain/template';

export interface IGetTemplatesUseCase {
  execute: () => Promise<TemplateModel[]>;
}

export class GetTemplatesUseCase implements IGetTemplatesUseCase {
  private bus = Bus.getInstance();

  async execute(): Promise<TemplateModel[]> {
    console.log('GetTemplatesUseCase use case called');
    const data: TemplateModel[] = [
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
