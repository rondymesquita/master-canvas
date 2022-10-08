import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';

import EditableText from '../../../components/EditableText';
import { SunIcon } from '@chakra-ui/icons';
import { CardCategory } from '../../../../domain/card';
import RequirementContent from './RequirementContent';
import DataContent from './DataContent';
import RiskContent from './RiskContent';

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
  category,
  title: inputTitle,
  content: inputContent,
}: any) {
  const [title, setTitle] = useState(inputTitle);
  const [content, setContent] = useState(inputContent);

  const focusRef = useRef(null);

  const onSaveButtonClick = () => {
    onSave({
      title,
      content,
    });
  };

  const destroyAndClose = () => {
    setContent({});
    onClose();
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={destroyAndClose}
        size={'6xl'}
        initialFocusRef={focusRef}
      >
        <div></div>
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
                <ModalCloseButton
                  ref={focusRef}
                  position={'relative'}
                  top={0}
                  right={0}
                />
              </Center>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex mb={4} justifyContent={'flex-end'}>
              <Actions cancel={destroyAndClose} ok={onSaveButtonClick} />
            </Flex>
            {(category === CardCategory.FUNCTIONAL ||
              category === CardCategory.NON_FUNCTIONAL) && (
              <RequirementContent
                content={content}
                onContentChange={setContent}
              />
            )}

            {category === CardCategory.DATA && (
              <DataContent content={content} onContentChange={setContent} />
            )}

            {category === CardCategory.RISK && (
              <RiskContent content={content} onContentChange={setContent} />
            )}
          </ModalBody>

          <ModalFooter>
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
