import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CardRequirementContentModel } from '../../../../domain/card';

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
        <ContentHeading>
          Visão de Persona - Experiência do Usuário
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.persona}
          onChange={(value) => onChange('persona', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Negócio</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.business}
          onChange={(value) => onChange('business', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Critério de Aceitação</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.acceptance}
          onChange={(value) => onChange('acceptance', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.data}
          onChange={(value) => onChange('data', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Infraestrutura</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.infra}
          onChange={(value) => onChange('infra', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>
          Visão de Risco de Produto - Literatura de Teste
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
