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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PageTemplate from '../templates/PageTemplate';

import { FaTrash, FaSearch } from 'react-icons/fa';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    setProjects([
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
      {
        code: '1',
        name: 'Meu Projeto 1',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Virginia',
      },
    ]);
  }, []);
  return (
    <PageTemplate>
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
              key={project.code}
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
