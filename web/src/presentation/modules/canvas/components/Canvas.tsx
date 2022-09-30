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
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Canvas({
  canvas,
  onClick,
  onEditClick,
  onDeleteClick,
}: any) {
  return (
    <Box
      borderWidth={1}
      p={3}
      borderRadius="md"
      boxShadow={'md'}
      boxSizing={'border-box'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => onClick(canvas)}
    >
      <Center flexDirection={'column'}>
        <Heading size="md">{canvas.title}</Heading>
        <Avatar name={canvas.title} />
      </Center>
      <Flex justifyContent={'start'} flexDirection={'column'}>
        <Text color="gray.500" fontStyle="italic" fontSize={'sm'}>
          Criado: {canvas.createdAt}
        </Text>
        <Text color="gray.500" fontStyle="italic" fontSize={'sm'}>
          Atualizado: {canvas.updatedAt}
        </Text>
      </Flex>
      <Flex mt="4" justifyContent={'end'} gap={2}>
        <Button
          colorScheme={'primary'}
          size={'sm'}
          leftIcon={<Icon as={FaEdit} />}
          onClick={(e) => {
            e.stopPropagation();
            onEditClick(canvas);
          }}
        >
          Editar
        </Button>
        <Button
          colorScheme={'accent'}
          size={'sm'}
          leftIcon={<Icon as={FaTrash} />}
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick(canvas);
          }}
        >
          Apagar
        </Button>
      </Flex>
    </Box>
  );
}
