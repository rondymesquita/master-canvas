export enum HelpCardCategory {
  FUNCTIONAL = 'FUNCTIONAL',
  NON_FUNCTIONAL = 'NON_FUNCTIONAL',
  RISK = 'RISK',
  DATA = 'DATA',
  ACCEPTANCE = 'ACCEPTANCE',
  FUNCTIONAL_SPECIFICATION = 'FUNCTIONAL_SPECIFICATION',
  NON_FUNCTIONAL_SPECIFICATION = 'NON_FUNCTIONAL_SPECIFICATION',
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
