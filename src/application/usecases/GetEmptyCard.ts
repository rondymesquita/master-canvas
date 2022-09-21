import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { QuestionModel, CardModel } from '../../domain/card';

export interface IGetEmptyCardUseCase {
  execute: (input?: GetEmptyCardInput) => CardModel;
}

export interface GetEmptyCardInput {
  category: string;
}

export class GetEmptyCardUseCase implements IGetEmptyCardUseCase {
  execute(input?: GetEmptyCardInput): CardModel {
    console.log('GetNewEmptyQuestionUseCase use case called');
    const data: CardModel = {
      id: v4(),
      title: 'Título do Card',
      description: 'string',
      category: input ? input.category : 'string',
      content: {
        persona: `Persona - Lorem ipsum dolor sit amet`,
        business: `Business- Lorem ipsum dolor sit amet`,
        acceptance: `Acceptance - Lorem ipsum dolor sit amet`,
        data: `Data - Lorem ipsum dolor sit amet`,
        infra: `Infra - Lorem ipsum dolor sit amet`,
        risk: `Risk - Lorem ipsum dolor sit amet`,
      },
    };

    return data;
  }
}
