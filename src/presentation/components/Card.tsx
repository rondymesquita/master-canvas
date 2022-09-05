import { EditIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  VStack,
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
    <Flex color="gray.700" px={0} width="full">
      <Center>
        <EditIcon />
      </Center>
      <Flex pl={2} flexGrow={1}>
        <Editable defaultValue={text} onChange={onChange} width="full">
          <EditablePreview
            // marginLeft={2}
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

export type TemplateProps = {
  title: string;
  description: string;
  questions: QuestionModel[];
  onDelete: Function;
  onQuestionChange: Function;
};

export default function Template({
  title,
  description,
  questions,
  onDelete,
  onQuestionChange,
}: any) {
  return (
    <Box
      bg="white"
      shadow={'sm'}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={4}
    >
      <Flex>
        <Center>
          <InfoIcon />
        </Center>
        <Box paddingLeft={2}>
          <Heading as="h4" size="sm">
            {title}
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Text>{description}</Text>
      </Flex>
      <Stack spacing="2" mt="4">
        {questions.map((q: QuestionModel) => {
          return (
            <VStack
              alignItems={'start'}
              borderWidth={1}
              borderRadius={'lg'}
              shadow={'md'}
              p={2}
              key={q.id}
            >
              <Question
                text={q.input}
                onChange={(input: string) =>
                  onQuestionChange({ input, output: q.output }, q.id)
                }
              ></Question>
              <Response
                text={q.output}
                onChange={(output: string) =>
                  onQuestionChange({ input: q.input, output }, q.id)
                }
              ></Response>
            </VStack>
          );
        })}
      </Stack>
      <Flex pt={4}>
        <Spacer />
        <Button colorScheme="primary" onClick={() => onDelete()}>
          Remover
        </Button>
      </Flex>
    </Box>
  );
}
