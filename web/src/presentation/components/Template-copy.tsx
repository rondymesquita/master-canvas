import { InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { QuestionModel } from '../../domain/card';

function Question({ text }: any) {
  return <Text color="primary.500">{text}</Text>;
}

function Response({ text }: any) {
  return <Text color="gray.500">{text}</Text>;
}

export default function Template({
  title,
  description,
  questions,
  onSelect,
  isEnabled = true,
}: any) {
  console.log({ isEnabled });

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
            <Box key={q.id}>
              <Question text={q.input}></Question>
              <Response text={q.output}></Response>
            </Box>
          );
        })}
      </Stack>
      <Flex pt={4}>
        <Spacer />
        <Button
          disabled={!isEnabled}
          colorScheme="primary"
          onClick={() => onSelect()}
        >
          {isEnabled ? 'Selecionar' : 'Já selecionado'}
        </Button>
      </Flex>
    </Box>
  );
}
