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

const nonFunctional: HelpCard[] = [
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.COVER,
    title: 'Visão Macro dos Requisitos Não Funcionais',
    icon: '',
  },
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos Não Funcionais',
    description:
      'Identificação das restrições do sistema como um todo. Sempre que possível, os requisitos não funcionais devem ser escritos quantitativamente, para que possam ser objetivamente testados.',
    icon: '',
    questions: [
      {
        question:
          'Descreva com detalhes as restrições aos serviços ou funções oferecidas pelo sistema como um todo.',
        response:
          'No sistema haverá restrições de timing, restrições no processo de desenvolvimento e restrições impostas pelas normas.',
      },
    ],
  },
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos Não Funcionais - Sistema Produto',
    description:
      'Identificação dos requisitos não funcionais provenientes das características requeridas para o software (requisitos de produto).',
    icon: '',
    questions: [
      {
        question:
          'Quais são os requisitos não funcionais do produto ou serviço que especificam ou restringem o comportamento do software? É interessante identificar os: Requisitos de desempenho que estão relacionados à rapidez com que o sistema deve executar e quanta memória ele requer, os requisitos de confiabilidade que estabelecem a taxa aceitável de falhas, os requisitos de proteção e os requisitos de usabilidade.',
        response:
          'O sistema deve permanecer disponível 24 horas e caso haja alguma falha, o seu tempo de recuperação deve ser de 2 segundos.',
      },
    ],
  },
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos Não Funcionais da Organização',
    description:
      'Identificação dos requisitos não funcionais da organização que desenvolve o software (requisitos organizacionais).',
    icon: '',
    questions: [
      {
        question:
          'Quais são os requisitos gerais de sistemas derivados das políticas e procedimentos da organização do cliente e do desenvolvedor? É interessante identificar os: Requisitos do processo operacional, que definem como o sistema será usado, os requisitos do processo de desenvolvimento que especificam a linguagem de programação, o ambiente de desenvolvimento ou normas de processo a serem usadas, bem como os requisitos ambientais que especificam o ambiente operacional do sistema.',
        response:
          'Para desenvolver este sistema será necessário utilizar a linguagem de programação Javascript',
      },
    ],
  },
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Identificação dos requisitos não funcionais de fontes externas.',
    description:
      'Identificação dos requisitos não funcionais da organização que desenvolve o software (requisitos organizacionais).',
    icon: '',
    questions: [
      {
        question:
          'Quais são os requisitos que derivam de fatores externos ao sistema e seu processo de desenvolvimento? É interessante identificar os: Requisitos reguladores, que definem o que deve ser feito para que o sistema seja aprovado para uso, por um regulador, tal como um banco central; requisitos legais, que devem ser seguidos para garantir que o sistema opere dentro da lei; e requisitos éticos, que asseguram que o sistema será aceitável para seus usuários e o público em geral.',
        response:
          'Para desenvolver este sistema deveremos cumprir todos os itens da lei LGPD.',
      },
    ],
  },
];

export default function useListHelpCards() {
  const list = (): HelpCard[][] => {
    const helpCards: HelpCard[][] = [functional, nonFunctional];
    return helpCards;
  };
  return [list];
}
