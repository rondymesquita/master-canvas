export interface Card {
  id: string;
  title: string;
  category: CardCategory;
}

export enum CardCategory {
  REQUIREMENT = 'REQUIREMENT',
  RISK = 'RISK',
  DATA = 'DATA',
}

export interface CardRequirement extends Card {
  content: {
    persona: string;
    business: string;
    acceptance: string;
    data: string;
    infra: string;
    risk: string;
  };
}

export interface CardRisk extends Card {
  content: string;
}

export interface CardData extends Card {
  content: string;
}
