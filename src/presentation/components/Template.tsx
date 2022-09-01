import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Question() {
  return <Text color="teal.500">Qual area de atuação?</Text>;
}

function Response() {
  return <Text color="gray.500">Ex: Engenharia de Software</Text>;
}

export default function Template({ data }: any) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={2}
    >
      <Flex>
        <Center>
          <InfoIcon />
        </Center>
        <Box paddingLeft={2}>
          <Heading as="h4" size="sm">
            Descritivo Básico
          </Heading>
        </Box>
      </Flex>
      <Flex>
        <Text>Descrição do curso o qual se deseja criar ou ajustar</Text>
      </Flex>
      <Stack spacing="2" mt="4">
        <Box>
          <Question></Question>
          <Response></Response>
        </Box>
        <Box>
          <Question></Question>
          <Response></Response>
        </Box>
      </Stack>
    </Box>
  );
}
