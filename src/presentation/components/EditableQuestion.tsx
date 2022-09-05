import { EditIcon } from '@chakra-ui/icons';
import {
  Center,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { QuestionModel } from '../../domain/template';

function Question({ text, onChange }: any) {
  // return <Text color="primary.500">{text}</Text>;
  return (
    <Flex color="primary.500" px={0} fontWeight={'bold'} width="full">
      <Center>
        <EditIcon />
      </Center>
      <Flex pl={2} flexGrow={1}>
        <Editable defaultValue={text} onChange={onChange} width="full">
          <EditablePreview
            borderWidth={1}
            borderColor={'gray.300'}
            width={'full'}
            // shadow={'md'}
            px={2}
          />
          <EditableTextarea borderWidth={1} px={2} />
        </Editable>
      </Flex>
    </Flex>
  );
}

function Response({ text, onChange }: any) {
  return (
    <Flex color="gray.700" px={0} width="full" my={1}>
      <Center>
        <EditIcon />
      </Center>
      <Flex pl={2} flexGrow={1}>
        <Editable defaultValue={text} onChange={onChange} width="full">
          <EditablePreview
            borderWidth={1}
            borderColor={'gray.300'}
            width={'full'}
            px={2}
          />
          <EditableTextarea borderWidth={1} px={2} />
        </Editable>
      </Flex>
    </Flex>
  );
}

type EditableQuestionType = {
  question: QuestionModel;
};

export default function EditableQuestion({
  id,
  input,
  output,
  onQuestionChange,
}: any) {
  return (
    <>
      {/* <Flex width={'full'} direction={'column'} mb={4}> */}
      <Question
        text={input}
        onChange={(input: string) =>
          onQuestionChange({ input, output: output }, id)
        }
      ></Question>
      <Response
        text={output}
        onChange={(output: string) =>
          onQuestionChange({ input: input, output }, id)
        }
      ></Response>
      {/* </Flex> */}
    </>
  );
}