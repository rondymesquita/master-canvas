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
          'Para desenvolver este sistema será necessário utilizar a linguagem de programação Javascript.',
      },
    ],
  },
  {
    category: HelpCardCategory.NON_FUNCTIONAL,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos Não Funcionais Externos',
    description:
      'Identificação dos requisitos não funcionais de fontes externas.',
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

const data: HelpCard[] = [
  {
    category: HelpCardCategory.DATA,
    variant: HelpCardVariant.COVER,
    title: 'Visão Macro dos Requisitos dos Dados',
    icon: '',
  },
  {
    category: HelpCardCategory.DATA,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão Macro dos Requisitos dos Dados',
    description:
      'Identificação dos dados necessários para a análise que apoiaram a construção da inteligência artificial.',
    icon: '',
    questions: [
      {
        question: 'Quem são os responsáveis por fornecer os dados?',
        response: 'Cliente',
      },
      {
        question:
          'Quem são os responsáveis por coletar, preparar ou criar os dados?',
        response: 'Cientista de Dados',
      },
      {
        question: 'Os dados coletados são públicos ou privados?',
        response:
          'Os dados coletados são dados privados do cliente ou os dados coletados são dados públicos (de código aberto).',
      },
      {
        question:
          'Quais dados devem ser mantidos e quais dados devem ser descartados para criar e treinar o modelo de IA?',
        response:
          'Os dados mantidos são os que contém boa qualidade e os dados que serão descartados são os que contém ruído ou baixa qualidade.',
      },
      {
        question:
          'Qual é o escopo (conjunto de dados adequados para os propósitos pretendidos) necessários para criar e treinar um modelo de IA que possa atender às necessidades dos usuários? Esses dados refletem o contexto (o mundo real) de maneira confiável?',
        response:
          'Os dados do usuário que apresenta a quantidade de cliques de iteração na tela são necessários para que possamos verificar a relevância do sistema para os usuários finais.',
      },
      {
        question:
          'Qual é o tipo de dado necessário para criar e treinar o modelo de IA?',
        response: 'Podem ser coleções de imagens, vídeos, texto, áudio etc...',
      },
      {
        question: 'Qual é o formato dos dados?',
        response: 'SQL, CSV, GEOSPATIAL, JSON, JPEG, etc...',
      },
      {
        question:
          'Qual é a fonte dos dados usada para criar e treinar o modelo de IA? Ou seja, de onde vem os dados e como serão coletados?',
        response:
          '<p>Ao dados utilizados para construir e treinar o modelo serão extraídos do dataset público <a href="https://datasetsearch.research.google.com/" target="_blank">X, Y, Z</a>, <a href="https://cloud.google.com/automl/" target="_blank">Google Cloud AutoML</a> , <a href="https://toolbox.google.com/datasetsearch" target="_blank">Google Dataset Search</a> , <a href="https://ai.google/tools/datasets/" target="_blank">dados Google AI</a> ,<a href="https://www.kaggle.com/datasets" target="_blank">Kaggle</a>, usaremos a saída de outro sistema de IA como um recurso de entrada para treinar o modelo, servidor de arquivos, API, FTP, fornecedores, serviços de terceiros, tabelas de banco de dados, métodos de API ou sites para raspar, etc.</p>',
      },
    ],
  },
];

const risk: HelpCard[] = [
  {
    category: HelpCardCategory.RISK,
    variant: HelpCardVariant.COVER,
    title: 'Riscos do Projeto',
    icon: '',
  },
  {
    category: HelpCardCategory.RISK,
    variant: HelpCardVariant.DETAIL,
    title: 'Riscos',
    description:
      'Identificação dos riscos/ameaças relacionados ao planejamento ou implementação da solução que contém inteligência artificial.',
    icon: '',
    questions: [
      {
        question:
          'Quais são as potenciais consequências negativas do projeto/modelo de IA? Pense nas suposições e no que pode dar errado se alguma delas estiver incorreta.',
        response:
          'Pode haver atraso na identificação dos requisitos devido a disponibilidade do cliente.',
      },
      {
        question:
          'Quais são os riscos relacionados ao fornecimento de coleta, preparação, criação dos dados, limitações do  conjunto de dados e modelo e da alteração nos dados?',
        response:
          'Pode haver atraso na liberação dos dados por parte do cliente devido a questões de confidencialidade.',
      },
      {
        question:
          'Quais são os riscos relacionados os critérios de Qualidade dos Dados conforme ISO/IEC 25012, ao qual abrange a precisão, completude, credibilidade, atualidade e consistência dos dados?',
        response:
          'Pode haver problemas na completude dos dados coletados devido não cobrir toda a gama de valores possíveis que são pertinentes para criar a IA.',
      },
      {
        question: 'Quais são os riscos relacionados aos Stakeholders?',
        response:
          'Pode haver desconfiança por parte do usuário final em utilizar o sistema inteligente.',
      },
      {
        question:
          'Quais são os riscos relacionados a privacidade e segurança dos dados?',
        response:
          'Pode haver falha de segurança devido a equipe técnica do projeto não estar utilizando nenhuma prática voltada a desenvolvimento seguro. Pode-se ter problemas de segurança e de internalização junto ao Centro de Processamento de Dados (CPD) da empresa.',
      },
      {
        question:
          'Quais são os riscos relacionados a vieses humanos na construção do modelo de IA, ou seja, aqueles relacionados a características sensíveis como raça, etnia, gênero, nacionalidade, renda, orientação sexual, habilidade e crença política ou religiosa?',
        response:
          'Pode haver vieses humanos na IA que será construída relacionado a raça, pois os dados fornecidos contêm descriminação por raça.',
      },
      {
        question: 'Quais são os riscos para implementar a solução com IA?',
        response:
          'Há a possibilidade desta funcionalidade não ser factível de ser construída do ponto de vista de arquitetura de software, pois a empresa não tem estrutura adequada para desenvolvê-lo',
      },
    ],
  },
];

const acceptance: HelpCard[] = [
  {
    category: HelpCardCategory.ACCEPTANCE,
    variant: HelpCardVariant.COVER,
    title: 'Critérios de Aceitação Geral',
    icon: '',
  },
  {
    category: HelpCardCategory.ACCEPTANCE,
    variant: HelpCardVariant.DETAIL,
    title: 'Critérios de Aceitação Geral',
    description:
      'Identificação dos critérios de aceitação geral que são necessários e comuns para todas as histórias de usuário do sistema para evitar a repetição das informações.',
    icon: '',
    questions: [
      {
        question:
          'Quais são os critérios de aceitação geral que são necessários para todas as histórias de usuário do sistema para evitar a repetição da informação em cada história de usuário? Exemplo: Critérios de Testes e Critérios associado a segurança e proteção dos dados',
        response: [
          'Todas as histórias de usuário do projeto devem manter a cobertura de 85% dos testes de unidade visando testar cada componente do sistema isoladamente.',
          'Todas as histórias de usuário do projeto devem manter a cobertura de 85% do teste sistêmico visando verificar se todas as funcionalidades que contém a IA estão funcionando de acordo com o previsto.',
          'Todas as histórias de usuário do projeto relacionadas a informações pessoas devem manter 100% dos dados pessoas do usuário protegidos através da criptografia.',
        ],
      },
    ],
  },
];

export default function useListHelpCards() {
  const list = (): HelpCard[][] => {
    const helpCards: HelpCard[][] = [
      functional,
      nonFunctional,
      data,
      risk,
      acceptance,
    ];
    return helpCards;
  };
  return [list];
}
