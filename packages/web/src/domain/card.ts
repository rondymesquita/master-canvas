export enum CardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  RISK = 'RISK',
  DATA = 'DATA',
}

export interface CardRequirementContentModel {
  persona: string;
  business: string;
  acceptance: string;
  data: string;
  infra: string;
  risk: string;
}

export interface CardDataContentModel {
  stakeholders: string;
  business: string;
  security: string;
  maintenance: string;
  training: string;
  risk: string;
}

// export interface CardRiskContentModel {
//   stakeholders: string;
//   business: string;
//   security: string;
//   maintenance: string;
//   training: string;
//   risk: string;
// }

export type CardContent =
  | CardRequirementContentModel
  | CardDataContentModel
  | string;

export interface CardModel {
  id: string;
  code?: number;
  title: string;
  active?: boolean;
  category: CardCategory;
  content: CardContent;
  canvas: string;
  createdAt?: Date;
  updatedAt: Date;
}
