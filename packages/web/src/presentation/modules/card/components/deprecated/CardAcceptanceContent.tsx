import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../../components/ContentBlock';
import ContentHeading from '../../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import { CardAcceptanceContentModel } from '../../../../../domain/model/card';
import 'react-quill/dist/quill.snow.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function CardAcceptanceContent({
  content,
  onContentChange,
}: {
  content: CardAcceptanceContentModel;
  onContentChange?: (payload: CardAcceptanceContentModel) => void;
}) {
  const [state, setState] = useState(content);

  const onChange = (
    property: keyof CardAcceptanceContentModel,
    value: string
  ) => {
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
        <ContentHeading icon={FaCheckCircle}>
          Critério de Aceitação
        </ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.acceptance}
          onChange={(value) => onChange('acceptance', value)}
        />
      </ContentBlock>
    </div>
  );
}
