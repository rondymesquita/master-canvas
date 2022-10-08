import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DataContentModel } from '../../../../domain/card';

type DataContentType = {
  content: DataContentModel;
  onContentChange: (payload: DataContentModel) => void;
};
export default function DataContent({
  content,
  onContentChange,
}: DataContentType) {
  const [state, setState] = useState(content);

  const onChange = (property: string, value: string) => {
    setState((prevState: any) => ({
      ...prevState,
      [property]: value,
    }));
  };

  useEffect(() => {
    onContentChange(state);
  }, [state]);

  return (
    <div>
      <ContentBlock>
        <ContentHeading>Visão das Partes Interessadas dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.stakeholders}
          onChange={(value) => onChange('stakeholders', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Negócio dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.business}
          onChange={(value) => onChange('business', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Segurança dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.security}
          onChange={(value) => onChange('security', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Manutenção dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.maintenance}
          onChange={(value) => onChange('maintenance', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Treinamento dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.training}
          onChange={(value) => onChange('training', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading>Visão de Risco dos Dados</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.risk}
          onChange={(value) => onChange('risk', value)}
        />
      </ContentBlock>
    </div>
  );
}
