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

export interface CardDataContent {
  stakeholders: string;
  business: string;
  security: string;
  maintenance: string;
  training: string;
  risk: string;
}

export interface CardRiskContent {
  risk: string;
}

export type CardContent =
  | CardRequirementContent
  | CardDataContent
  | CardRiskContent;

export interface Card {
  id: string;
  code: number;
  title: string;
  active: boolean;
  category: CardCategory;
  content: CardContent;
  canvas: string;
  createdAt: Date;
  updatedAt: Date;
}
