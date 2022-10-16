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
import { CardService } from '../../../infra/rest/card.service';
import { waitPromise } from '../../../util/waitpromise';

const requirementContent: CardRequirementContentModel = {
  interdependency: '<p>Dependencia</p>',
  persona: `<p><strong>Exemplo:</strong> Esta funcionalidade é destinada para &lt;Corredor&gt; que possui a seguinte necessidade humana &lt; ter mais variedade em suas corridas para não ficar entediado e parar de correr, deseja acompanhar suas corridas diárias para que possa se preparar para 10k em seis meses ou conhecer outros corredores em seu nível de habilidade para que eles possam se manter motivados para continuar correndo&gt; .</p>`,
  business: `<p><strong>Exemplo Requisito Funcional: </strong>Como &lt;GERENTE DE LOJA&gt;, preciso saber &lt;QUAL O NÚMERO TOTAL DE CLIENTES NA LOJA?&gt;, para que eu possa tomar a &lt;DECISÃO SOBRE No DE CAIXAS&gt;, a fim de alcançar &lt;REDUZIR A ESPERA NO CHECK- LINHAS DE FORA&gt;</p>`,
  acceptance: `<p><strong>Exemplo: </strong>Manter 100% desta funcionalidade livre de caráter discriminatório, seja por, idade, incapacidade, mudança de sexo, casamento e parceria civil, gravidez e maternidade, religião ou crença, sexo ou orientação sexual. <strong>Link para consultar as características protegidas que podem gerar descriminação: </strong><a href="https://www.equalityhumanrights.com/en/equality-act/protected-characteristics" target="_blank">https://www.equalityhumanrights.com/en/equality-act/protected-characteristics</a>.</p>`,
  data: `<p>Para implementar esta funcionalidade, vamos precisar de um conjunto de dados com as seguintes informações: <strong>Tipo do Dado: </strong> &lt;Informar se o tipo de dado é uma coleções de imagens, vídeos, texto, áudio etc...&gt;</p><p><strong>Formato do Dado:</strong> &lt;Informar se o formato do dado é SQL, CSV, GEOSPATIAL, JSON, etc...&gt;</p><p><strong>Fonte do Dado: </strong>&lt; Informar de onde os dados são obtidos. Ex: O dado vem do comportamentos do usuário, (usuário, filme, data da nota, nota) encontrado na tabela X do banco de dados da aplicação.</p><p><strong>Escopo dos Dados:</strong> &lt;Informar o conjuntos de dados adequados para os propósitos pretendidos que possa atender às necessidades dos usuários, ou seja, informar a necessidade de obter dados reais que representem o problema real, por exemplo, precisaremos dos dados X,Y,Z.&gt;.</p><p><br></p><p><strong>Exemplo:  </strong>Para implementar esta funcionalidade, vamos precisar de um conjunto de dados com as seguintes informações: o tipo do dado é imagem, o formato do dado é JPEG, os dados serão coletados de um ambiente público (<a href="https://toolbox.google.com/datasetsearch" target="_blank">Google Dataset Search</a>), e o escopo dos dados são as rotas de corrida e treinos mais utilizadas na cidade de Fortaleza.</p>`,
  infra: `<p><strong>Exemplos: </strong>Esta funcionalidade precisará da infraestrutura baseado em nuvem (cloud) para para poder se integrar com as outras funcionalidade/serviços do sistema e a estratégia de vaporização de dados será transporte de dados em tempo real.</p>`,
  risk: `<p><strong>Exemplo 1: </strong>Há a possibilidade do usuário não confiar no sistema e não lhe gerar valor devido a solução não ter um propósito que lhe interesse.</p><p><strong>Exemplo 2:</strong> Há a possibilidade desta funcionalidade não ser factível de ser construída do ponto de vista de  arquitetura de software, pois a empresa não tem estrutura adequada para desenvolvê-lo.</p><p><strong>Exemplo 3:</strong> Há a possibilidade desta funcionalidade não ser testada devido o tempo do projeto ser curto.</p><p><br></p>`,
};

const dataContent: CardDataContentModel = {
  stakeholders: `<p><strong>Exemplo: </strong>Para implementar as funcionalidade do sistema, será necessário que o &lt;cliente&gt; forneça os dados e/ou &lt;cientista de dados&gt; crie, prepare e colete os dados.</p>`,
  business: `<p>&lt;Informar algumas informações pertinentes para o escopo necessário de dados para serem utilizados na elaboração da inteligência artificial. &gt;</p><p><br></p><p><strong>Exemplo: </strong>Para implementar esta funcionalidade, vamos precisar de um conjunto de dados com as seguintes informações:</p><p><strong>Motivo de uso dos Dados:</strong> &lt;Informar porque os dados X,Y,Z são necessários para serem utilizados no projeto&gt;.</p><p><strong>Escopo dos Dados:</strong> &lt;Informar o conjuntos de dados adequados para os propósitos pretendidos que possa atender às necessidades dos usuários, ou seja, informar os dados reais que representem o problema real, por exemplo, precisaremos dos dados X,Y,Z.&gt;.</p><p><strong>Tipo do Dado: </strong>&lt;Informar se o tipo de dado é uma coleções de imagens, vídeos, texto, áudio etc...&gt;</p><p><strong>Formato do Dado:</strong> &lt;Informar se o formato do dado é SQL, CSV, GEOSPATIAL, JSON, JPEG, etc...&gt;</p><p><strong>Operações aplicada aos Dados:</strong> &lt;Informar que operações serão aplicadas nos dados. <strong>Exemplo: </strong>limpeza e rotulagem de dados.&gt;</p><p><strong>Rótulo dos Dados: </strong>&lt;Informar qual rótulo será aplicado nos dados. <strong>Exemplo:</strong> imagem formatos, propriedades da planta e rótulos “seguro para tocar” e “seguro para comer” ou (DD/MM/AAAA vs. MM/DD/AAAA) .</p><p><strong>Fonte do Dado: </strong>&lt; Informar de onde os dados serão obtidos. <strong>Exemplo: </strong>Para acessar este conjunto de dados utilizaremos uma dataset público <a href="https://datasetsearch.research.google.com/" target="_blank">X, Y, Z</a>, <a href="https://cloud.google.com/automl/" target="_blank">Google Cloud AutoML</a> , <a href="https://toolbox.google.com/datasetsearch" target="_blank">Google Dataset Search</a> , <a href="https://ai.google/tools/datasets/" target="_blank">dados Google AI</a> ou <a href="https://www.kaggle.com/datasets" target="_blank">Kaggle</a> ou usaremos a saída de outro sistema de IA  como um recurso de entrada para treinar o modelo, servidor de arquivos, métodos de API, FTP, fornecedores, serviços de terceiros, tabelas X,Y, Z de banco de dados, sites para raspar, etc...&gt;</p><p><strong>Quantidade de Dados: </strong>&lt;Informar a quantidade de dados esperada de acordo com o tipo de problema e a complexidade do algoritmo. <strong>Exemplo:</strong> Precisaremos de 10.000 dados do usuário&gt;.</p><p><strong>Dados com qualidade baixa:</strong> &lt; Informar quais dados com baixa qualidade, mas que se assemelham as situações do mundo real serão inseridos no escopo dos dados. <strong>Exemplo:</strong> Precisaremos dos dados X,Y,Z com baixa qualidade.&gt;</p>`,
  security: `<p>&lt;Informar como será realizado a segurança dos dados que serão utilizados na inteligência artificial. &gt;</p><p><br></p><p><strong>Exemplo: </strong>Para implementar esta funcionalidade, vamos precisar de um conjunto de dados com as seguintes informações:</p><p><br></p><p><strong>Aplicar tipo de tratamento nos Dados:</strong> &lt;Informar qual abordagens será usada para anonimizar os dados, pois os dados sensíveis precisam de tratamento de forma diferente devido conter informações de identificação pessoal ou características protegidas.</p><p><strong>Exemplo:</strong> Aplicaremos a abordagem agregação ou redação para anonimize nomes, endereços&gt;.</p><p><br></p><p><strong>Armazenamento dos Dados: </strong>&lt;Informar onde os dados serão armazenados e por quanto tempo devem ser retidos mantendo a segurança dos mesmos.</p><p><strong>Exemplo:</strong> Os dados serão armazenados no SVN do projeto por todo o período do projeto&gt;.</p><p><br></p><p><strong>Disponibilização dos Dados: &lt;</strong>Informar se os dados devem ser disponibilizados para outras equipes. <strong>Exemplo:</strong> Os dados não podem ser disponibilizados para outas equipes ou empresas. Ou os dados podem ser disponibilizados para a Google e/ou de código aberto, porém é necessário informar quais restrições de licenciamento, acesso, uso e distribuição de dados são necessárias&gt;.</p><p><br></p><p><strong>Responsável por aprovar os dados de uma baseline:</strong> &lt;Informar quem é o responsável (um especialista de domínio que reflita o problema) por aprovar a liberação dos dados e indicar se estes dados que serão utilizados tem uma versão X salva no repositório de controle de versão do projeto&gt;.</p>`,
  maintenance: `<p>&lt;Informar como será realizado a manutenibilidade dos dados que serão utilizados no desenvolvimento das funcionalidade do sistema que contém inteligência artificial. &gt;</p><p><br></p><p><strong>Frequência de atualização dos Dados: </strong>&lt;Informar com que frequência os dados serão atualizados. Os dados devem ser atualizados regularmente? Se sim, com que frequência? Por quanto tempo os dados devem ser retidos? Inclua quaisquer compensações aceitáveis.</p><p><strong>Exemplo: </strong>Os dados devem ser atualizados a cada 3 meses&gt;.</p>`,
  training: `<p>&lt;Informar como será realizado a distribuição dos dados para o treinamento e  teste que serão utilizados no desenvolvimento das funcionalidades do sistema que contém inteligência artificial. &gt;</p><p><br></p><p><strong>% de Dados alocados para Teste e Treinamento:</strong> &lt;Informar o % de distribuições de dados de treinamento e teste. <strong>Exemplo:</strong> Vamos utilizar 60% dos dados para treinamento e 40% para validações e testes.&gt;</p>`,
  risk: `<p>&lt;Informar que ameaças ou riscos pode ocorrer em consequências do uso destes dados que atendem aos requisitos do projeto&gt;</p><p><strong>Exemplo: </strong>Pode haver vieses humanos relacionados a raça nos dados utilizados.</p>`,
};

const riskContent: CardRiskContentModel = {
  risk: '<h1>Risk Template</h1>',
};

const acceptanceContent: CardAcceptanceContentModel = {
  acceptance: '<p>Critério de Aceitação</p>',
};

export default function useGetTemplateCard() {
  const get = (category: CardCategory): CardContentModel => {
    const templates = {
      [CardCategory.FUNCTIONAL]: requirementContent,
      [CardCategory.NON_FUNCTIONAL]: requirementContent,
      [CardCategory.DATA]: dataContent,
      [CardCategory.RISK]: riskContent,
      [CardCategory.ACCEPTANCE]: acceptanceContent,
    };

    const template = templates[category];
    return template;
  };
  return [get];
}
