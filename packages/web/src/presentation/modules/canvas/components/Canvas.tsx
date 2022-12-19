import {
  Avatar,
  background,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaEdit,
  FaPencilAlt,
  FaRegStar,
  FaStar,
  FaTrash,
} from 'react-icons/fa';

export default function Canvas({
  canvas,
  isStarred,
  onClick,
  onEditClick,
  onDeleteClick,
  onStarClick,
}: any) {
  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(new Date(date));
  };

  return (
    <Box
      borderWidth={1}
      borderColor={'bg.300'}
      p={3}
      bg={'bg.0'}
      borderRadius="lg"
      // boxShadow={'xl'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => onClick(canvas)}
    >
      <Center flexDirection={'column'} gap={4} my={4}>
        <Flex>
          <Center gap={2}>
            <IconButton
              icon={isStarred ? <FaStar /> : <FaRegStar />}
              aria-label=""
              // colorScheme={'yellow'}
              color={isStarred ? 'yellow.500' : 'primary.500'}
              size={'lg'}
              variant={'ghost'}
              onClick={(e) => {
                e.stopPropagation();
                onStarClick && onStarClick(canvas);
              }}
            />
            <Heading size="md" wordBreak={'break-word'}>
              {canvas.title}
            </Heading>
          </Center>
        </Flex>
        <Avatar name={canvas.title} />
      </Center>
      <Flex justifyContent={'start'} flexDirection={'column'}>
        <Text as={'em'} fontSize={'sm'}>
          <strong>Criado:</strong> {formatDate(canvas.createdAt)}
        </Text>
        <Text as={'em'} fontSize={'sm'}>
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
          // variant={'ghost'}
          size={'sm'}
          leftIcon={<Icon as={FaPencilAlt} />}
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
