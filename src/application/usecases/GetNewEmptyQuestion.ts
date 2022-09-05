import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { QuestionModel, TemplateModel } from '../../domain/template';

export interface IGetNewEmptyQuestionUseCase {
  execute: () => QuestionModel;
}

export class GetNewEmptyQuestionUseCase implements IGetNewEmptyQuestionUseCase {
  async execute(): QuestionModel {
    console.log('GetNewEmptyQuestionUseCase use case called');
    const data: QuestionModel = {
      id: v4(),
      input: 'Vazia',
      output: 'Vazia',
    };

    return data;
  }
}
