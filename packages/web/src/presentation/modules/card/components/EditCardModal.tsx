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
  Spacer,
} from '@chakra-ui/react';

import EditableText from '../../../components/EditableText';
import { SunIcon } from '@chakra-ui/icons';
import { CardCategory } from '../../../../domain/card';
import RequirementContent from './RequirementContent';
import DataContent from './DataContent';
import RiskContent from './RiskContent';

function Actions({ children, cancel, ok }: any) {
  return (
    <Flex gap={2}>
      <Box>
        <Button variant="outline" onClick={cancel}>
          Cancelar
        </Button>
      </Box>
      {/* <Spacer /> */}
      <Box flexGrow={1}>{children}</Box>
      <Box>
        <Button colorScheme="primary" onClick={ok}>
          Salvar
        </Button>
      </Box>
    </Flex>
  );
}

export default function EditCardModal({
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
    // console.log(content);
  }, [content]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        closeOnEsc={false}
        isOpen={isOpen}
        onClose={destroyAndClose}
        size={'full'}
        initialFocusRef={focusRef}
      >
        <div></div>
        <ModalOverlay />
        <ModalContent py={4}>
          <ModalHeader>
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick}>
              <EditableText
                flexGrow={1}
                value={title}
                onChange={(newTitle: string) => setTitle(newTitle)}
              />
            </Actions>

            {/* <Center pl="4">
                <ModalCloseButton
                  ref={focusRef}
                  position={'relative'}
                  top={0}
                  right={0}
                />
              </Center> */}
          </ModalHeader>
          <ModalBody>
            <Flex mb={4} justifyContent={'flex-end'}></Flex>
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
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick}></Actions>
          </ModalBody>

          {/* <ModalFooter justifyContent={'center'}></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
