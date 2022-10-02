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
export interface Card {
  id?: string;
  title: string;
  active?: boolean;
  category: CardCategory;
  content: CardRequirementContent | string;
  canvas: string;
  createdAt?: Date;
  updatedAt?: Date;
}
