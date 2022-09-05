export interface QuestionModel {
  id: string;
  input: string;
  output: string;
}

export class TemplateModel {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: QuestionModel[];
}
