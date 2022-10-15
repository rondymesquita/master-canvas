import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CardDataContentModel } from '../../../../domain/card';
import {
  FaChartPie,
  FaDatabase,
  FaExclamationTriangle,
  FaLightbulb,
  FaLock,
  FaNewspaper,
} from 'react-icons/fa';

type DataContentType = {
  content: CardDataContentModel;
  onContentChange?: (payload: CardDataContentModel) => void;
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
    onContentChange && onContentChange(state);
  }, [state]);

  return (
    <div>
      <ContentBlock>
        <ContentHeading icon={FaDatabase}>
          Visão das Partes Interessadas dos Dados
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.stakeholders}
          onChange={(value) => onChange('stakeholders', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaLightbulb}>
          Visão de Negócio dos Dados
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.business}
          onChange={(value) => onChange('business', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaLock}>
          Visão de Segurança dos Dados
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.security}
          onChange={(value) => onChange('security', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaNewspaper}>
          Visão de Manutenção dos Dados
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.maintenance}
          onChange={(value) => onChange('maintenance', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaChartPie}>
          Visão de Treinamento dos Dados
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.training}
          onChange={(value) => onChange('training', value)}
        />
      </ContentBlock>
      <ContentBlock>
        <ContentHeading icon={FaExclamationTriangle}>
          Visão de Risco dos Dados
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
