import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PageTemplate from '../../templates/PageTemplate';

import { FaTrash, FaSearch, FaPlus } from 'react-icons/fa';
import NewProjectModal from './components/NewProjectModal';
import { v4 } from 'uuid';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSave = (data: any) => {
    console.log('data', { data });
    // submit form data
    // close modal
    onClose();
  };

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    setProjects([
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        id: v4(),
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
    ]);
  }, []);
  return (
    <PageTemplate>
      <NewProjectModal {...{ isOpen, onOpen, onClose, onSave }} />
      {/* Search */}
      <Flex borderWidth="1" p={2}>
        <Flex width={'full'} gap="4">
          <Box flexGrow={1}>
            <Input placeholder="Buscar projetos" />
          </Box>
          {/* <Spacer /> */}
          <Box flexShrink={0}>
            <Button colorScheme={'primary'} leftIcon={<Icon as={FaSearch} />}>
              Buscar
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* Tollbar */}
      <Flex p={2}>
        <Button
          colorScheme={'primary'}
          leftIcon={<Icon as={FaPlus} />}
          onClick={onOpen}
        >
          Novo Projeto
        </Button>
      </Flex>

      {/* Results */}
      <Grid
        p={2}
        flexWrap="wrap"
        gap={16}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {projects.map((project) => {
          return (
            <Box
              key={project.id}
              borderWidth={1}
              p={3}
              borderRadius="md"
              boxShadow={'md'}
              boxSizing={'border-box'}
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
                  variant={'outline'}
                  size={'sm'}
                  leftIcon={<Icon as={FaTrash} />}
                >
                  Apagar
                </Button>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </PageTemplate>
  );
}
