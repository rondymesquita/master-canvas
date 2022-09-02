export interface QuestionModel {
  id: string;
  question: string;
  response: string;
}

export interface CardModel {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: QuestionModel[];
}
