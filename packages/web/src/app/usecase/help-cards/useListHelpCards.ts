import { useEffect, useState } from 'react';
import {
  CardCategory,
  CardModel,
  CardContentModel,
  CardRiskContentModel,
  CardDataContentModel,
  CardRequirementContentModel,
  CardAcceptanceContentModel,
} from '../../../domain/card';
import {
  HelpCard,
  HelpCardCategory,
  HelpCardVariant,
} from '../../../domain/help-card';

const functional: HelpCard[] = [
  {
    category: HelpCardCategory.FUNCTIONAL,
    variant: HelpCardVariant.COVER,
    title: 'Visão Macro dos Requisitos Funcionais',
    icon: '',
  },
  {
    category: HelpCardCategory.FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos Funcionais',
    description:
      'Identificação das necessidades do cliente ou usuário para o sistema em alto nível. Agrupamento de informações sobre o sistema requerido e os sistemas existentes.',
    icon: '',
    questions: [
      {
        question:
          'O que o sistema deve fazer e os serviços que deve oferecer para os seus usuários em alto nível, ou seja, de forma mais macro? Descrever de modo que sejam compreensíveis para os usuários do sistema que não tenham conhecimentos técnicos',
        response:
          'O sistema deve sugerir diversas opções de locais para o usuário se exercitar próximo a sua residência.',
      },
    ],
  },
];

export default function useListHelpCards() {
  const list = (): HelpCard[][] => {
    const helpCards: HelpCard[][] = [functional, functional];
    return helpCards;
  };
  return [list];
}
