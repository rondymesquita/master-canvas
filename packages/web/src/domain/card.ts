export enum CardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  RISK = 'RISK',
  DATA = 'DATA',
}

export interface RequirementContentModel {
  persona: string;
  business: string;
  acceptance: string;
  data: string;
  infra: string;
  risk: string;
}

export interface DataContentModel {
  stakeholders: string;
  business: string;
  security: string;
  maintenance: string;
  training: string;
  risk: string;
}

export type ContentModel = RequirementContentModel | DataContentModel | string;

export class CardModel {
  id: string;
  title: string;
  active?: boolean;
  category: CardCategory;
  content: ContentModel;
  canvas: string;
  createdAt?: Date;
  updatedAt?: Date;
}
