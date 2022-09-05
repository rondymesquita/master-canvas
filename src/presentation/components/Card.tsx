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
import EditableQuestion from './EditableQuestion';

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
      <Flex
        mt="4"
        alignItems={'start'}
        borderWidth={1}
        borderRadius={'lg'}
        shadow={'md'}
        p={2}
        direction={'column'}
      >
        {questions.map((question: QuestionModel) => {
          return (
            <Flex width={'full'} direction={'column'} key={question.id} mb={4}>
              <EditableQuestion
                input={question.input}
                output={question.output}
                onChange={(input: string) =>
                  onQuestionChange(
                    { input, output: question.output },
                    question.id
                  )
                }
              ></EditableQuestion>
            </Flex>
          );
        })}
      </Flex>
      <Flex pt={4}>
        <Spacer />
        <Button colorScheme="primary" onClick={() => onDelete()}>
          Remover
        </Button>
      </Flex>
    </Box>
  );
}
