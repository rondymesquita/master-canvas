import {
  AddIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
  InfoIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { QuestionModel } from '../../domain/card';
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
  onSave,
}: any) {
  const hideAddButon = (index: number) => {
    return questions.length === index + 1;
  };

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
      <Flex mt="4" alignItems={'start'} direction={'column'}>
        {questions.map((question: QuestionModel, index: number) => {
          return (
            <Flex direction={'column'} width={'full'} key={question.id}>
              <Flex
                width={'full'}
                direction={'row'}
                key={question.id}
                shadow={'md'}
                borderWidth={1}
                padding={4}
                mt={6}
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
                <Stack pl={2} direction="column">
                  <IconButton
                    variant="outline"
                    aria-label=""
                    icon={<DeleteIcon />}
                    onClick={() => deleteQuestionClick(index)}
                  ></IconButton>
                  <Spacer />
                  <IconButton
                    variant="solid"
                    colorScheme={'green'}
                    aria-label=""
                    icon={<CheckIcon />}
                    onClick={() => onSave(index)}
                  ></IconButton>
                </Stack>
              </Flex>
              {!hideAddButon(index) ? (
                <Button
                  leftIcon={<AddIcon />}
                  size={'xs'}
                  shadow={'md'}
                  onClick={() => addQuestionClick(index)}
                ></Button>
              ) : (
                ''
              )}
            </Flex>
          );
        })}
      </Flex>
      <Flex>
        <Button
          width={'full'}
          leftIcon={<AddIcon />}
          size={'xs'}
          shadow={'md'}
          onClick={() => addQuestionClick(questions.length - 1)}
        ></Button>
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
