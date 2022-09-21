export interface QuestionModel {
  id: string;
  input: string;
  output: string;
}

export interface ContentModel {
  persona: string;
  business: string;
  acceptance: string;
  data: string;
  infra: string;
  risk: string;
}

export class CardModel {
  id: string;
  title: string;
  description: string;
  category: string;
  content: ContentModel;
  questions?: QuestionModel[];
}
