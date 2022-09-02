import { EditIcon, InfoIcon } from "@chakra-ui/icons";
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

function Response({ text, onChange }: any) {
  return (
    <Box color="gray.700">
      <Flex>
        <Center>
          <EditIcon />
        </Center>
        <Box pl={2}>
          <Editable defaultValue={text} onChange={onChange}>
            <EditablePreview
              borderWidth={1}
              borderColor={"gray.300"}
              shadow={"md"}
              px={2}
            />
            <EditableTextarea borderWidth={1} px={2} />
          </Editable>
        </Box>
      </Flex>
    </Box>
  );
}

export default function Template({
  title,
  description,
  questions,
  onDelete,
  onResponseChange,
}: any) {
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
                onChange={(newResponse: string) =>
                  onResponseChange(newResponse, q.id)
                }
              ></Response>
            </Box>
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
