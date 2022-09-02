import { InfoIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React from "react";

function Question({ text }: any) {
  return <Text color="teal.500">{text}</Text>;
}

function Response({ text, onResponseChange }: any) {
  return (
    <Text color="gray.700">
      <Editable defaultValue={text} onChange={onResponseChange}>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Text>
  );
}

export default function Template({
  title,
  description,
  questions,
  onDelete,
}: any) {
  const data = {
    title,
    description,
    questions,
  };

  console.log({ data });

  const onResponseChange = () => {};

  return (
    <Box
      bg="white"
      shadow={"sm"}
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
        {questions.map((q: any) => {
          return (
            <Box key={q.question}>
              <Question text={q.question}></Question>
              <Response
                text={q.response}
                onChange={onResponseChange}
              ></Response>
            </Box>
          );
        })}
      </Stack>
      <Flex pt={4}>
        <Spacer />
        <Button colorScheme="primary" onClick={() => onDelete(data)}>
          Remover
        </Button>
      </Flex>
    </Box>
  );
}
