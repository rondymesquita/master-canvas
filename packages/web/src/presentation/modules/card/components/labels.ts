import { CardCategory } from '../../../../domain/card';

export const labels: Record<string, Record<string, string>> = {
  FUNCTIONAL: {
    interdependency: 'Visão de Pré-Requisito e Interdependencia',
    persona: 'Visão de Persona',
    business: 'Visão de Negócio',
    acceptance: 'Visão de Critério de Aceitação',
    data: 'Visão de Dados',
    infra: 'Visão de Infraestrutura',
    risk: 'Visão de Risco de Produto',
  },
  NON_FUNCTIONAL: {
    interdependency: 'Visão de Pré-Requisito e Interdependência',
    persona: 'Visão de Persona',
    business: 'Visão de Negócio',
    acceptance: 'Visão de Critério de Aceitação',
    data: 'Visão de Dados',
    infra: 'Visão de Infraestrutura',
    risk: 'Visão de Risco de Produto',
  },
  RISK: {
    risk: 'Risco',
  },
  DATA: {
    stakeholders: 'Visão das Partes Interessadas dos Dados',
    business: 'Visão de Negócio dos Dados',
    security: 'Visão de Segurança dos Dados',
    maintenance: 'Visão de Manutenção dos Dados',
    training: 'Visão de Treinamento dos Dados',
    risk: 'Visão de Risco dos Dados',
  },
  ACCEPTANCE: {
    acceptance: 'Critério de Aceitação',
  },
};

export const categories: Record<string, string> = {
  [CardCategory.FUNCTIONAL]: 'Requisitos funcionais',
  [CardCategory.NON_FUNCTIONAL]: 'Requisitos não funcionais',
  [CardCategory.DATA]: 'Requisitos das necessidades e coleta do dados',
  [CardCategory.RISK]: 'Riscos',
  [CardCategory.ACCEPTANCE]: 'Critérios de Aceitação Geral',
};
