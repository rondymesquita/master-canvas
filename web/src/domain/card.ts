export enum CardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  RISK = 'RISK',
  DATA = 'DATA',
}

export interface CardRequirementContent {
  persona: string;
  business: string;
  acceptance: string;
  data: string;
  infra: string;
  risk: string;
}
export class CardModel {
  id?: string;
  title: string;
  active?: boolean;
  category: CardCategory;
  content: CardRequirementContent | string;
  createdAt?: Date;
  updatedAt?: Date;
}
