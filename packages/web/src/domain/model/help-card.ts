export enum HelpCardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  DATA = 'DATA',
  RISK = 'RISK',
  ACCEPTANCE = 'ACCEPTANCE',
  FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION = 'FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION',
  DATA_NEEDS = 'DATA_NEEDS',
}

export enum HelpCardVariant {
  COVER = 'COVER',
  DETAIL = 'DETAIL',
}

export type HelpCardQuestionResponse = string | string[];

export interface HelpCardQuestion {
  question: string;
  response: HelpCardQuestionResponse;
}

export interface HelpCard {
  icon: string;
  title: string;
  helpCardNumber?: number;
  description?: string;
  content?: string;
  questions?: HelpCardQuestion[];
  category: HelpCardCategory;
  variant: HelpCardVariant;
}
