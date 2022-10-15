import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CardRequirementContentModel } from '../../../../domain/card';
import {
  FaChartPie,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaServer,
  FaUser,
} from 'react-icons/fa';

export default function RequirementContent({
  content,
  onContentChange,
}: {
  content: CardRequirementContentModel;
  onContentChange?: (payload: CardRequirementContentModel) => void;
}) {
  const [state, setState] = useState(content);

  const onChange = (property: string, value: string) => {
    setState((prevState: any) => ({
      ...prevState,
      [property]: value,
    }));
  };

  useEffect(() => {
    onContentChange && onContentChange(state);
  }, [state]);

  return (
    <div>
      <ContentBlock>
        <ContentHeading icon={FaUser}>Visão de Persona</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.persona}
          onChange={(value) => onChange('persona', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaLightbulb}>Visão de Negócio</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.business}
          onChange={(value) => onChange('business', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaCheckCircle}>
          Visão de Critério de Aceitação
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.acceptance}
          onChange={(value) => onChange('acceptance', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaChartPie}>Visão de Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.data}
          onChange={(value) => onChange('data', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaServer}>Visão de Infraestrutura</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.infra}
          onChange={(value) => onChange('infra', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaExclamationTriangle}>
          Visão de Risco de Produto
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.risk}
          onChange={(value) => onChange('risk', value)}
        />
      </ContentBlock>
    </div>
  );
}
