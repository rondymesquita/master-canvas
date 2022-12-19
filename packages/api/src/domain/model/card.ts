export enum CardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  RISK = 'RISK',
  ACCEPTANCE = 'ACCEPTANCE',
  DATA = 'DATA',
}

export enum CardStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  BLOCKED = 'BLOCKED',
  UNDER_REVISION = 'UNDER_REVISION',
  DONE = 'DONE',
}

export interface CardRequirementContent {
  interdependency: string;
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

export interface CardAcceptanceContent {
  acceptance: string;
}

export type CardContent =
  | CardRequirementContent
  | CardDataContent
  | CardRiskContent
  | CardAcceptanceContent;

export interface Card {
  id: string;
  code: number;
  title: string;
  active: boolean;
  category: CardCategory;
  status: CardStatus;
  content: CardContent;
  canvas: string;
  createdAt: Date;
  updatedAt: Date;
}
