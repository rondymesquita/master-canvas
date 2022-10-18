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
  IconButton,
} from '@chakra-ui/react';

import EditableText from '../../../components/EditableText';
import { SunIcon } from '@chakra-ui/icons';
import { CardCategory } from '../../../../domain/card';
// import CardRequirementContent from './CardRequirementContent';
// import DataContent from './DataContent';
// import RiskContent from './RiskContent';
// import CardAcceptanceContent from './CardAcceptanceContent';
import AbstractCardContent from './AbstractCardContent';
import { FaBars, FaSave } from 'react-icons/fa';

function Actions({ children, cancel, ok }: any) {
  return (
    <Flex gap={2}>
      <Button colorScheme="secondary" variant="outline" onClick={cancel}>
        Cancelar
      </Button>
      <Box flexGrow={1}>{children}</Box>
      <Button
        aria-label=""
        leftIcon={<FaBars />}
        colorScheme="secondary"
        variant={'outline'}
        onClick={ok}
      >
        Ajuda
      </Button>
      <Button leftIcon={<FaSave />} colorScheme="primary" onClick={ok}>
        Salvar
      </Button>
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
        <ModalOverlay />
        <ModalContent bg={'background.100'}>
          <ModalHeader
            borderBottomWidth={1}
            borderBottomColor={'background.300'}
          >
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick}>
              <EditableText
                placeholder={'Título do cartão'}
                as={'textarea'}
                flexGrow={1}
                value={title}
                onChange={(newTitle: string) => setTitle(newTitle)}
              />
            </Actions>
          </ModalHeader>
          <ModalBody pt={4} bg={'white'}>
            <Flex justifyContent={'flex-end'}></Flex>

            <AbstractCardContent
              category={category}
              content={content}
              onContentChange={setContent}
            />
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick}></Actions>
          </ModalBody>

          {/* <ModalFooter justifyContent={'center'}></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
