import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  CardContentModel,
  CardRequirementContentModel,
} from '../../../../domain/card';
import {
  FaChartPie,
  FaCheckCircle,
  FaDatabase,
  FaExclamationTriangle,
  FaLightbulb,
  FaLink,
  FaLock,
  FaNewspaper,
  FaServer,
  FaUser,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export default function AbstractCardContent({
  category,
  content,
  onContentChange,
}: {
  category: string;
  content: CardContentModel;
  onContentChange?: (payload: CardContentModel) => void;
}) {
  const [state, setState] = useState<CardContentModel>(content);

  const onChange = (property: string, value: string) => {
    setState((prevState: any) => ({
      ...prevState,
      [property]: value,
    }));
  };

  useEffect(() => {
    onContentChange && onContentChange(state);
  }, [state]);

  const labels: Record<string, Record<string, string>> = {
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

  const icons: Record<string, Record<string, IconType>> = {
    FUNCTIONAL: {
      interdependency: FaLink,
      persona: FaUser,
      business: FaLightbulb,
      acceptance: FaCheckCircle,
      data: FaChartPie,
      infra: FaServer,
      risk: FaExclamationTriangle,
    },
    NON_FUNCTIONAL: {
      interdependency: FaLink,
      persona: FaUser,
      business: FaLightbulb,
      acceptance: FaCheckCircle,
      data: FaChartPie,
      infra: FaServer,
      risk: FaExclamationTriangle,
    },
    RISK: {
      risk: FaExclamationTriangle,
    },
    DATA: {
      stakeholders: FaDatabase,
      business: FaLightbulb,
      security: FaLock,
      maintenance: FaNewspaper,
      training: FaChartPie,
      risk: FaExclamationTriangle,
    },
    ACCEPTANCE: {
      acceptance: FaCheckCircle,
    },
  };

  return (
    <div>
      {/* {category} */}
      {Object.entries(state).map(
        ([propertyName, propertyValue], index: number) => {
          return (
            <ContentBlock key={index}>
              <ContentHeading icon={icons[category][propertyName]}>
                {labels[category][propertyName]}
              </ContentHeading>
              <ReactQuill
                theme="snow"
                // @ts-ignore
                value={state[propertyName]}
                onChange={(value) => onChange(propertyName, value)}
              />
            </ContentBlock>
          );
        }
      )}
    </div>
  );
}
