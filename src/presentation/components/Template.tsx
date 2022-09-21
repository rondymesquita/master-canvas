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
  content,
  onSelect,
  isEnabled = true,
}: any) {
  // console.log({ isEnabled });

  return (
    <Box
      bg="yellow.100"
      shadow={'md'}
      maxW="sm"
      borderWidth="1px"
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
      <Flex mt="4">{content}</Flex>
      <Flex pt={4}>
        <Spacer />
        <Button
          size={'sm'}
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
