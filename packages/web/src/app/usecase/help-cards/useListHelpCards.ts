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

const functionalNonFunctionalSpecification: HelpCard[] = [
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.COVER,
    title: 'Especificação dos Requisitos Funcionais e Não Funcionais',
    icon: '',
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Pré - Requisito e Interdependência',
    description:
      'Identificação dos pré-requisitos que devem estar concluídos para especificar a funcionalidade e quais requisitos a funcionalidade se integra.',
    icon: '',
    questions: [
      {
        question:
          'Quais são os pré-requisitos ou atividades que precisam ser concluídas para especificar ou implementar a funcionalidade?',
        response: 'Concluir a atividade de exploração dos dado',
      },
      {
        question:
          'Quais são os requisitos que esta funcionalidade se integra ou têm uma interdependência?',
        response:
          'A história de Usuário [01] tem uma integração ou interdependência com a história de Usuário [07].',
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Persona',
    description:
      'Identificação dos atores/personas envolvido na funcionalidade e suas necessidades.',
    icon: '',
    questions: [
      {
        question:
          'Quem ou o que - humano/não humano, indivíduo/organizacional/rede - são os usuários, e para quem ou o que o design deveria ser desejável? Ou seja, para quem a funcionalidade é destinada?',
        response: 'Corredor de corrida profissional.',
      },
      {
        question:
          'Quais são as necessidades humanas que o ator/persona possui?',
        response:
          'O corredor deseja ter mais variedade em suas corridas para não ficar entediado e não parar de correr.',
      },
      {
        question:
          'Quais são as atividades mais comuns que o ator/persona realiza (tanto pessoal quanto profissionalmente)?',
        response:
          'O corredor gosta de visualizar sugestões de lugares próxima a sua residência disponível para correr.',
      },
      {
        question: 'Quais são seus objetivos, suas dificuldades ou desafios?',
        response:
          'O corredor tem como objetivo acompanhar suas corridas diárias para que possa se preparar para 10k em seis meses.',
      },
    ],
  },
  // {
  //   category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
  //   variant: HelpCardVariant.DETAIL,
  //   title: 'Visão de Negócio - Requisito Funcional',
  //   description:
  //     'Identificação do que precisa ser desenvolvido para o usuário, ou seja, quais são as funcionalidades. Representam a descrição das funcionalidades e serviços que se esperam do sistema',
  //   icon: '',
  //   questions: [
  //     {
  //       question:
  //         'Quais são as principais estratégias de negócios em seu domínio de interesse?',
  //       response: 'Melhorar a saúde do corredor.',
  //     },
  //   ],
  // },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Negócio - Tomadores de Decisão',
    description: 'Quem são esses tomadores de decisão?',
    icon: '',
    questions: [
      {
        question:
          'Quais são as restrições ou os requisitos não funcionais do sistema?',
        response: [
          'Requisitos de usabilidade (facilidade de uso). Ex.: usuários deverão operar o sistema após um determinado tempo de treinamento.',
          'Requisitos de eficiência. Ex.: o sistema deverá processar n requisições por um determinado tempo.',
          'Requisitos de confiabilidade. Ex.: o sistema deverá ter alta disponibilidade, exemplo, 99% do tempo.',
          'Requisitos de portabilidade. Ex.: o sistema deverá executar em qualquer plataforma.',
          'Requisitos de entrega. Ex.: um relatório de acompanhamento deverá ser fornecido toda segunda-feira.',
          'Requisitos de implementação. Ex.: o sistema deverá ser desenvolvido na linguagem Java.',
          'Requisitos de padrões. Ex.: uso de programação orientada a objeto sob a plataforma A.',
          'Requisitos de interoperabilidade. Ex.: o sistema deverá se comunicar com o banco SQL Server.',
          'Requisitos éticos. Ex.: o sistema não apresentará aos usuários quaisquer dados de cunho privativo.',
          'Requisitos legais. Ex.: o sistema deverá atender às normas legais, tais como padrões, leis, etc.',
        ],
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Negócio - Requisito Não Funcional',
    description:
      'Identificação das características de qualidade e das restrições do sistema, como confiabilidade, desempenho, sistema operacional, entre outros.',
    icon: '',
    questions: [
      {
        question:
          'Por que eles precisariam tomar tais decisões? De qual objetivo de negócios cada decisão faz parte? De qual processo de negócios (rotina) essa decisão faz parte?',
        response: 'O tomador de decisão será o corredor.',
      },
      {
        question: 'Qual é a frequência de cada decisão (com que frequência)?',
        response:
          'O corredor terás que tomar decisões a cada 30 minutos após o início da corrida utilizando a aplicação.',
      },
      {
        question:
          'O que o(s) decisor(es) precisa(m) saber durante os processos de decisão?',
        response:
          'O corredor precisará saber como estás a sua frequência cárdia para que possa tomar a decisão, por exemplo, de aumentar a quilometragem e a velocidade de corrida.',
      },
      {
        question:
          'Quais são as perguntas que vêm à sua mente (e eles precisam ter uma resposta) durante suas atividades de tomada de decisão?',
        response:
          'O corredor  precisará se perguntar se deve continua correndo ao passar 45 minutos ou deve descansar e recomeçar novamente no dia seguinte.',
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Critério de Aceitação',
    description:
      'Identificação dos critérios de aceitação para a funcionalidade ser considerada concluída.',
    icon: '',
    questions: [
      {
        question:
          'Quais são os requisitos éticos/justo associado a esta funcionalidade que precisam ser verificados e validados? Consultar guia de vieses humanos.',
        response:
          '<p>Manter 100% desta funcionalidade livre de caráter discriminatório por orientação sexual.</p><p>Link para consultar ideias de discriminação:</p><a href="https://www.equalityhumanrights.com/en/equality-act/protected-characteristics" target="_blank">https://www.equalityhumanrights.com/en/equality-act/protected-characteristics</a>',
      },
      {
        question:
          'Quais são os requisitos éticos (viés humano) associado a esta funcionalidade que precisam ser verificados e validados? Consultar guia de vieses humanos.',
        response:
          'Manter 100% desta funcionalidade livre de vieses humanos, seja por preconceito no grupo.</p><p>Link para consultar ideias de vieses humanos: </p><a href="https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias" target="_blank">https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias.</a>',
      },
      {
        question:
          'Quais são os requisitos de proteção e segurança dos dados associado a esta funcionalidade que precisam ser verificados e validados?',
        response:
          '<p>Manter 100% dos dados pessoas do usuário protegidos através da criptografia.</p><p>Link para consultar a lei de proteção dos dados geral e do Brasil: </p><a href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" target="_blank">https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd</a>',
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Dados',
    description:
      'Identificação das necessidades dos dados para implementar a funcionalidade.',
    icon: '',
    questions: [
      {
        question:
          'Que tipo de dados seria relevante para gerar os insights e responder à questão de negócios em questão?',
        response: 'Coleções de imagens, vídeos, texto, áudio, etc.',
      },
      {
        question: 'Qual formato do dado é relevante?',
        response: 'SQL, CSV, GEOSPATIAL, JSON, etc',
      },
      {
        question:
          'Qual é a fonte dos dados, ou seja, de onde eles serão obtidos?',
        response:
          'Google Dataset Search, tabelas X,Y, Z de banco de dados, serviços de terceiros, etc.',
      },
      {
        question:
          'Qual é o escopo do dado a ser utilizado para desenvolver a funcionalidade que contém IA? Quais são os dados reais que representem o problema no mundo real.',
        response:
          'Precisaremos de dados que apresentam a iteração do usuário final com o sistema.',
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Infraestrutura',
    description:
      'Identificação da infraestrutura necessária para que a funcionalidade possa se integrar com outros serviços.',
    icon: '',
    questions: [
      {
        question:
          'Esta funcionalidade irá se integrar com o restante da funcionalidade do sistema?',
        response:
          'Esta funcionalidade precisará da infraestrutura baseado em nuvem (cloud) para poder se integrar com as outras funcionalidades/serviços do sistema, a estratégia de vaporização de dados será transporte de dados em tempo real e o banco de dados X.',
      },
      {
        question: 'Qual é a estratégia de vaporização de dados usada?',
        response:
          'Transporte de dados em tempo real ou em lotes, Streaming de dados).',
      },
      {
        question:
          'Como o modelo do sistema habilitado para IA será executado e consumido?',
        response:
          'Do lado do cliente, back-end, baseado em nuvem ou ponto final de serviço da Web.',
      },
    ],
  },
  {
    category: HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION,
    variant: HelpCardVariant.DETAIL,
    title: 'Visão de Risco do Produto',
    description:
      'Identificação dos riscos/ameaças relacionados ao produto ou implementação da solução com IA.',
    icon: '',
    questions: [
      {
        question:
          'Esta funcionalidade tem valor para o cliente? O usuário confiará neste sistema?',
        response:
          'Pode haver falta de interesse por parte do usuário final, pois a interface não é atraente.',
      },
      {
        question:
          'Esta funcionalidade é factível de ser construído do ponto de vista de código, engenharia e arquitetura de software, e a empresa tem estrutura para desenvolvê-lo?',
        response:
          'Há a possibilidade desta funcionalidade não ser factível de ser construída do ponto de vista de arquitetura de software, pois a empresa não tem a estrutura adequada para desenvolvê-la.',
      },
      {
        question:
          'Esta funcionalidade é factível de ser testada ou não, seja por motivo de custo, tempo e possibilidade de teste? Quais tipos de testes e quais casos de testes é possível realizar? A cobertura dos testes é viável? A escolha dos tipos de testes e revisões é adequada? A priorização dos testes, o planejamento e a execução está aderente a funcionalidade?',
        response:
          'Há a possibilidade desta funcionalidade não ser testada devido o tempo do projeto ser curto',
      },
      {
        question:
          'Quais são os riscos relacionados ao fornecimento de coleta, preparação, criação dos dados, limitações do conjunto de dados e modelo e da alteração nos dados usados para implementar esta funcionalidade?',
        response:
          'Pode haver atraso na liberação dos dados que serão utilizados no desenvolvimento desta funcionalidade devido à restrição de acesso e questões de confidencialidade.',
      },
      {
        question:
          'Quais são os riscos relacionados a privacidade e segurança dos dados usados para implementar esta funcionalidade?',
        response:
          'Pode haver falha de segurança devido a equipe técnica do projeto não estar utilizando nenhuma prática voltada a desenvolvimento seguro. Pode-se ter problemas de segurança e de internalização junto ao Centro de Processamento de Dados (CPD) da empresa.',
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
      functionalNonFunctionalSpecification,
    ];
    return helpCards;
  };
  return [list];
}
