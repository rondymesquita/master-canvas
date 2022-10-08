import React, { useEffect, useState } from 'react';
import ContentBlock from '../../../components/ContentBlock';
import ContentHeading from '../../../components/ContentHeading';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { ContentModel } from '../../../../domain/card';

export default function RequirementContent({ content, onContentChange }: any) {
  // const [persona, setPersona] = useState(content?.persona);
  // const [business, setBusiness] = useState(content?.business);
  // const [acceptance, setAcceptance] = useState(content?.acceptance);
  // const [data, setData] = useState(content?.data);
  // const [infra, setInfra] = useState(content?.infra);
  // const [risk, setRisk] = useState(content?.risk);

  const [state, setState] = useState(content);

  // const destroyAndClose = () => {
  //   setPersona('');
  //   setBusiness('');
  //   setAcceptance('');
  //   setData('');
  //   setInfra('');
  //   setRisk('');
  //   // onClose();
  // };

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
