import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Box,
  Spacer,
  Heading,
  Center,
} from '@chakra-ui/react';

// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// import RichTextEditor from 'react-rte';
// import { createEditor } from 'slate';
// import { Slate, Editable, withReact } from 'slate-react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import EditableText from './EditableText';
import { SunIcon } from '@chakra-ui/icons';

function Block({ children }: any) {
  return (
    <Box
      p="2"
      mb="4"
      borderWidth={1}
      borderColor={'primary.500'}
      borderRadius="md"
    >
      {children}
    </Box>
  );
}

function BlockHeading({ children }: any) {
  return (
    <Flex>
      <Center p="2">
        <SunIcon fontSize={'4xl'} />
      </Center>
      <Center p="2">
        <Heading textAlign={'center'} size="lg">
          {children}
        </Heading>
      </Center>
    </Flex>
  );
}

function Actions({ cancel, ok }: any) {
  return (
    <Flex gap={4}>
      <Button variant="outline" onClick={cancel}>
        Cancelar
      </Button>
      <Button colorScheme="primary" onClick={ok}>
        Salvar
      </Button>
    </Flex>
  );
}

export default function CardEdit({
  isOpen,
  onOpen,
  onClose,
  onSave,
  content,
  title: inputTitle,
}: any) {
  const [persona, setPersona] = useState(content?.persona);
  const [business, setBusiness] = useState(content?.business);
  const [acceptance, setAcceptance] = useState(content?.acceptance);
  const [data, setData] = useState(content?.data);
  const [infra, setInfra] = useState(content?.infra);
  const [risk, setRisk] = useState(content?.risk);
  const [title, setTitle] = useState(inputTitle);

  const onSaveButtonClick = () => {
    onSave({
      title,
      content: {
        persona,
        business,
        acceptance,
        data,
        infra,
        risk,
      },
    });
  };

  const destroyAndClose = () => {
    setPersona('');
    setBusiness('');
    setAcceptance('');
    setData('');
    setInfra('');
    setRisk('');
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={destroyAndClose} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Box flexGrow={1}>
                <EditableText
                  value={title}
                  onChange={(newTitle: string) => setTitle(newTitle)}
                />
              </Box>
              <Center pl="4">
                <ModalCloseButton position={'relative'} top={0} right={0} />
              </Center>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex mb={4} justifyContent={'flex-end'}>
              <Actions cancel={destroyAndClose} ok={onSaveButtonClick} />
            </Flex>
            <Block>
              <BlockHeading>
                Visão de Persona - Experiência do Usuário
              </BlockHeading>
              <ReactQuill theme="snow" value={persona} onChange={setPersona} />
            </Block>
            <Block>
              <BlockHeading>Visão de Negócio</BlockHeading>
              <ReactQuill
                theme="snow"
                value={business}
                onChange={setBusiness}
              />
            </Block>
            <Block>
              <BlockHeading>Visão de Critério de Aceitação</BlockHeading>
              <ReactQuill
                theme="snow"
                value={acceptance}
                onChange={setAcceptance}
              />
            </Block>
            <Block>
              <BlockHeading>Visão de Dados</BlockHeading>
              <ReactQuill theme="snow" value={data} onChange={setData} />
            </Block>
            <Block>
              <BlockHeading>Visão de Infraestrutura</BlockHeading>
              <ReactQuill theme="snow" value={infra} onChange={setInfra} />
            </Block>
            <Block>
              <BlockHeading>
                Visão de Risco de Produto - Literatura de Teste
              </BlockHeading>
              <ReactQuill theme="snow" value={risk} onChange={setRisk} />
            </Block>
          </ModalBody>

          <ModalFooter>
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
