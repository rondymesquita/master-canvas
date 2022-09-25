import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Project({ project, onClick }: any) {
  return (
    <Box
      borderWidth={1}
      p={3}
      borderRadius="md"
      boxShadow={'md'}
      boxSizing={'border-box'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => onClick(project)}
    >
      <Center flexDirection={'column'}>
        <Heading size="md">{project.name}</Heading>
        <Avatar name={project.name} />
      </Center>
      <Flex justifyContent={'start'} flexDirection={'column'}>
        <Text color="gray.500" fontStyle="italic" fontSize={'sm'}>
          Criado: {project.created_at}
        </Text>
        <Text color="gray.500" fontStyle="italic" fontSize={'sm'}>
          Atualizado: {project.updated_at}
        </Text>
      </Flex>
      <Flex mt="4" justifyContent={'end'}>
        <Button
          colorScheme={'accent'}
          // variant={'ghost'}
          size={'sm'}
          leftIcon={<Icon as={FaTrash} />}
        >
          Apagar
        </Button>
      </Flex>
    </Box>
  );
}
