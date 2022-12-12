export enum CardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  DATA = 'DATA',
  RISK = 'RISK',
  ACCEPTANCE = 'ACCEPTANCE',
}

export enum CardStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  BLOCKED = 'BLOCKED',
  UNDER_REVISION = 'UNDER_REVISION',
  DONE = 'DONE',
}

export interface CardRequirementContentModel {
  interdependency: string;
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

export interface CardRiskContentModel {
  risk: string;
}

export interface CardAcceptanceContentModel {
  acceptance: string;
}

export type CardContentModel =
  | CardRequirementContentModel
  | CardDataContentModel
  | CardRiskContentModel
  | CardAcceptanceContentModel;

export interface CardModel {
  id: string;
  code?: number;
  title: string;
  active?: boolean;
  category: CardCategory;
  status: CardStatus;
  content: CardContentModel;
  canvas: string;
  createdAt?: Date;
  updatedAt?: Date;
}
