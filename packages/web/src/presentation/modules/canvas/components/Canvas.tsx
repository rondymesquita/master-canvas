import {
  Avatar,
  background,
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
  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(new Date(date));
  };

  return (
    <Box
      // borderWidth={1}
      p={3}
      bg={'bg.0'}
      borderRadius="lg"
      boxShadow={'xl'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => onClick(canvas)}
    >
      <Center flexDirection={'column'} gap={4} my={4}>
        <Heading size="md">{canvas.title}</Heading>
        <Avatar name={canvas.title} />
      </Center>
      <Flex justifyContent={'start'} flexDirection={'column'}>
        <Text color="fg.500" fontSize={'sm'} mb={4}>
          <strong>Criado:</strong> {formatDate(canvas.createdAt)}
        </Text>
        <Text color="fg.500" fontSize={'sm'}>
          <strong>Atualizado:</strong> {formatDate(canvas.updatedAt)}
        </Text>
      </Flex>
      <Flex mt="4" justifyContent={'space-between'} gap={2}>
        <Button
          colorScheme={'destructive'}
          variant={'ghost'}
          size={'sm'}
          leftIcon={<Icon as={FaTrash} />}
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick && onDeleteClick(canvas);
          }}
        >
          Apagar
        </Button>
        <Button
          colorScheme={'primary'}
          variant={'ghost'}
          size={'sm'}
          leftIcon={<Icon as={FaEdit} />}
          onClick={(e) => {
            e.stopPropagation();
            onEditClick && onEditClick(canvas);
          }}
        >
          Editar
        </Button>
      </Flex>
    </Box>
  );
}
