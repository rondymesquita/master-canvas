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
        category: 'cursos',
        description: 'Descrição do curso o qual se deseja criar ou ajustar',
        questions: [
          {
            id: v4(),
            input: 'Qual area de atuação?',
            output: 'Ex: Engenharia de Software',
          },
          {
            id: v4(),
            input: 'Pergunta',
            output: 'Ex: Resposta',
          },
        ],
      },
    ];
    return data;
  }
}
