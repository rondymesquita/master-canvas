import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  createRef,
  useImperativeHandle,
} from 'react';
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
import { memo } from 'react';
// import { useThrottleFn, useThrottle } from 'react-use';

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

export default forwardRef(AbstractCardContent);
function AbstractCardContent(
  {
    category,
    content,
  }: {
    category: string;
    content: CardContentModel;
  },
  ref: any
) {
  const createRefs = (): { [key: string]: any } => {
    const list = Object.keys(content).map((propertyName) => {
      return [propertyName, createRef()];
    });

    return Object.fromEntries(list);
  };
  const refs = createRefs();

  const getContentFromQuill = () => {
    const contentAsArray = Object.entries(refs).map(([propertyName, ref]) => {
      const editor = ref.current.getEditor();
      const unprivilegedEditor = ref.current.makeUnprivilegedEditor(editor);
      return [propertyName, unprivilegedEditor.getHTML()];
    });
    return Object.fromEntries(contentAsArray);
  };

  const publicRef = {
    getUpdatedContent: () => {
      const updatedContent = getContentFromQuill();
      return updatedContent;
    },
  };

  useImperativeHandle(ref, () => publicRef);

  return (
    <div>
      {/* {category} */}
      {Object.entries(content).map(
        ([propertyName, propertyValue], index: number) => {
          return (
            <ContentBlock key={index}>
              <ContentHeading icon={icons[category][propertyName]}>
                {labels[category][propertyName]}
              </ContentHeading>
              <ReactQuill
                theme="snow"
                // @ts-ignore
                ref={refs[propertyName]}
                // @ts-ignore
                defaultValue={content[propertyName]}
              />
            </ContentBlock>
          );
        }
      )}
    </div>
  );
}
