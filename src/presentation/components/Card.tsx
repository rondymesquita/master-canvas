import { AddIcon, DeleteIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
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
  IconButton,
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
  addQuestionClick,
  deleteQuestionClick,
}: any) {
  return (
    <Box
      bg="white"
      shadow={'sm'}
      width="full"
      flexGrow={1}
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
        // borderWidth={1}
        // borderRadius={'lg'}
        // shadow={'md'}
        p={2}
        direction={'column'}
      >
        {questions.map((question: QuestionModel, index: number) => {
          return (
            <Flex direction={'column'} width={'full'} mb={4}>
              <Flex
                width={'full'}
                direction={'row'}
                key={question.id}
                shadow={'md'}
                borderWidth={1}
                padding={4}
                mb={2}
              >
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
                <Spacer />
                <Center pl={4}>
                  <IconButton
                    variant="outline"
                    aria-label=""
                    icon={<DeleteIcon />}
                    onClick={() => deleteQuestionClick(index)}
                  ></IconButton>
                </Center>
              </Flex>
              <Button
                leftIcon={<AddIcon />}
                size={'xs'}
                shadow={'md'}
                onClick={() => addQuestionClick(index)}
              ></Button>
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
