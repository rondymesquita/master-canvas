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

import RichTextEditor from 'react-rte';
import EditableText from './EditableText';
import { SunIcon } from '@chakra-ui/icons';

function Block({ children }) {
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

function BlockHeading({ children }) {
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

export default function CardEdit({
  isOpen,
  onOpen,
  onClose,
  onSave,
  content: inputContent,
  title: inputTitle,
}: any) {
  console.log('created');

  const [content, setContent] = useState(
    RichTextEditor.createValueFromString(inputContent, 'markdown')
  );

  const [title, setTitle] = useState(inputTitle);

  const onContentChange = (newContent: any) => {
    setContent(newContent);
  };

  const onSaveButtonClick = () => {
    onSave({ content: content.toString('markdown'), title });
  };

  const destroyAndClose = () => {
    setContent(RichTextEditor.createEmptyValue('', 'markdown'));
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={destroyAndClose} size={'4xl'}>
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
              <Box pl="4">
                <ModalCloseButton position={'relative'} />
              </Box>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Block>
              <BlockHeading>
                Visão de Persona - Experiência do Usuário
              </BlockHeading>
              <RichTextEditor
                value={content}
                onChange={(newContent: any) => setContent(newContent)}
              />
            </Block>
          </ModalBody>

          <ModalFooter>
            <Flex gap={4}>
              <Button variant="outline" onClick={destroyAndClose}>
                Cancelar
              </Button>
              <Button colorScheme="primary" onClick={onSaveButtonClick}>
                Salvar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
