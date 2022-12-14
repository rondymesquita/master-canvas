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
import PageTemplate from '../../templates/PageTemplate';

import { FaTrash, FaSearch, FaPlus } from 'react-icons/fa';
import NewProjectModal from './components/NewProjectModal';
import { v4 } from 'uuid';
import Project from './components/Project';
import EditProjectModal from './components/EditProjectModal';
import useDisclosure from '../../hooks/useDisclosure';

export default function ListProjectsPage() {
  const [projects, setProjects] = useState<any>([]);
  const [currentProject, setCurrentProject] = useState<any>([]);

  const [isNewOpen, onNewOpen, onNewClose] = useDisclosure();
  const [isEditOpen, onEditOpen, onEditClose] = useDisclosure();

  const onSave = (data: any) => {
    console.log('data', { data });
    // submit form data
    onNewClose();
  };

  const onEdit = (data: any) => {
    console.log('data', { data });
    // submit form data
    onEditClose();
  };

  const onClickProject = (project: any) => {
    //navigate to list all canvas of project
    console.log('navegando....');
  };

  const onEditClickProject = (project: any) => {
    setCurrentProject(project);
    onEditOpen();
  };
  const onDeleteClickProject = (project: any) => {
    //modal ask confirmation;
    //delete
    // alert();
    console.log('deleting');
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
        name: 'Meu Projeto 2',
        created_at: new Date().toLocaleTimeString('pt-BR', options),
        updated_at: new Date().toLocaleTimeString('pt-BR', options),
        owner: 'Rondy',
      },
    ]);
  }, []);
  return (
    <PageTemplate>
      <NewProjectModal
        key={new Date().toISOString()}
        {...{
          isOpen: isNewOpen,
          onOpen: onNewOpen,
          onClose: onNewClose,
          onSave,
        }}
      />

      <EditProjectModal
        key={currentProject.id + new Date().toISOString()}
        {...{
          project: currentProject,
          isOpen: isEditOpen,
          onOpen: onEditOpen,
          onClose: onEditClose,
          onEdit,
        }}
      />
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
          onClick={() => onNewOpen}
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
        {projects.map((project: any) => {
          return (
            <Project
              key={project.id}
              project={project}
              onClick={onClickProject}
              onEditClick={onEditClickProject}
              onDeleteClick={onDeleteClickProject}
            />
          );
        })}
      </Grid>
    </PageTemplate>
  );
}
