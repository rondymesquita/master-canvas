import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CardRiskContentModel } from '../../../../domain/card';
import { FaExclamationTriangle } from 'react-icons/fa';

type RiskContentType = {
  content: CardRiskContentModel;
  onContentChange?: (payload: CardRiskContentModel) => void;
};
export default function RiskContent({
  content,
  onContentChange,
}: RiskContentType) {
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
        <ContentHeading icon={FaExclamationTriangle}>Risco</ContentHeading>
        <ReactQuill
          theme="snow"
          value={state.risk}
          onChange={(value) => onChange('risk', value)}
        />
      </ContentBlock>
    </div>
  );
}
