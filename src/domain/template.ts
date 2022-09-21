export interface QuestionModel {
  id: string;
  input: string;
  output: string;
}

export class CardModel {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  questions?: QuestionModel[];
}
