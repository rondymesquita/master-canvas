export enum CardCategory {
  REQUIREMENT = 'REQUIREMENT',
  RISK = 'RISK',
  DATA = 'DATA',
}

export interface SaveCardInput {
  title: string;
  category: CardCategory;
  content: any;
  description: string;
}
export interface SaveCardOutput {}

export interface ISaveCard {
  handle(input: SaveCardInput): SaveCardOutput;
}
