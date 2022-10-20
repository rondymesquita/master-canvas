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

export interface HelpCard {
  icon: string;
  title: string;
  key?: number;
  description?: string;
  content?: string;
  category: HelpCardCategory;
  variant: HelpCardVariant;
}
