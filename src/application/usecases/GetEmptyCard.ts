import { Bus } from '../../util/Bus';
import { v4 } from 'uuid';
import { QuestionModel, CardModel } from '../../domain/template';

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
      title: 'string',
      description: 'string',
      category: input ? input.category : 'string',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nibh
      finibus diam eleifend sodales sit amet eget tortor. Quisque et erat eu
      ante fermentum laoreet sit amet a leo. In ut finibus enim, malesuada
      tempor felis. Sed id leo in ligula lobortis tempus. Sed eu dictum nulla,
      ut suscipit enim. Nam porttitor sollicitudin nisl, id dapibus ipsum
      ultrices sed. Duis eget felis ligula. Vivamus sit amet massa neque.
      Curabitur ornare tellus quis dolor dignissim, at imperdiet neque lacinia.
      Vivamus gravida, sem a porta laoreet, nisi justo finibus nisl, vitae
      accumsan ligula velit non nisl. Orci varius natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Cras tempor ut nulla
      molestie sodales. Etiam in dolor ex. In nunc augue, feugiat eget lacinia
      eget, porttitor ac libero.`,
    };

    return data;
  }
}
