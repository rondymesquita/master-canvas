import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type RiskContentType = {
  content: string;
  onContentChange?: (payload: string) => void;
};
export default function RiskContent({
  content,
  onContentChange,
}: RiskContentType) {
  const [state, setState] = useState(content);

  useEffect(() => {
    onContentChange && onContentChange(state);
  }, [state]);

  return (
    <div>
      <ContentBlock>
        <ContentHeading>Risco</ContentHeading>
        <ReactQuill theme="snow" value={state} onChange={setState} />
      </ContentBlock>
    </div>
  );
}
