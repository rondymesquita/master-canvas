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
} from '../../../../domain/model/card';
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
import { labels } from './labels';

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

const LINEBREAK_PATTERN = '<p><br></p>';
const SINGLE_LINEBREAK_PATTERN = '<p><br></p>';
const addExtraLineBreak = (text: string) => {
  return text.replaceAll(SINGLE_LINEBREAK_PATTERN, LINEBREAK_PATTERN);
};

export default forwardRef(AbstractCardContent);
function AbstractCardContent(
  {
    category,
    content: inputContent,
  }: {
    category: string;
    content: CardContentModel;
  },
  ref: any
) {
  const createRefs = (): { [key: string]: any } => {
    const list = Object.keys(inputContent).map((propertyName) => {
      return [propertyName, createRef()];
    });

    return Object.fromEntries(list);
  };
  const refs = createRefs();
  const [content, setContent] = useState({});

  const parse = (input: any, replaceFn: (value: string) => string) => {
    const contentAsArray = Object.entries(input).map(
      ([propertyName, propertyValue]: [any, any]) => {
        return [propertyName, replaceFn(propertyValue)];
      }
    );
    return Object.fromEntries(contentAsArray);
  };

  useEffect(() => {
    setContent(parse(inputContent, addExtraLineBreak));
  }, []);

  const getContentFromQuill = () => {
    const contentAsArray = Object.entries(refs).map(([propertyName, ref]) => {
      const editor = ref.current.getEditor();
      const valueAsHTML = ref.current.makeUnprivilegedEditor(editor).getHTML();
      // return [propertyName, removeExtraLineBreak(valueAsHTML)];
      return [propertyName, valueAsHTML];
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
                preserveWhitespace={false}
                theme="snow"
                // @ts-ignore
                ref={refs[propertyName]}
                // @ts-ignore
                defaultValue={content[propertyName]}
                modules={{
                  clipboard: {
                    matchVisual: false,
                  },
                }}
              />
            </ContentBlock>
          );
        }
      )}
    </div>
  );
}
