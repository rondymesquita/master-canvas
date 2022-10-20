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
  Portal,
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
import { usePortal } from '../../../contexts/PortalContext';

function Actions({ children, cancel, ok, help }: any) {
  return (
    <Flex gap={2} width="full">
      <Button colorScheme="secondary" variant="outline" onClick={cancel}>
        Cancelar
      </Button>
      <Box flexGrow={1}>{children}</Box>
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
  onHelp,
  category,
  title: inputTitle,
  content: inputContent,
}: any) {
  const [title, setTitle] = useState(inputTitle);
  const [content, setContent] = useState(inputContent);

  const { portalRef } = usePortal();

  const onSaveButtonClick = () => {
    onSave({
      title,
      content,
    });
    onClose();
  };

  const destroyAndClose = () => {
    setContent({});
    onClose();
  };

  if (!category) {
    return <>error</>;
  }

  return (
    <>
      <Portal containerRef={portalRef}>
        {isOpen && (
          <Flex
            bg={'bg.100'}
            p={2}
            position={'relative'}
            flexDirection={'column'}
            width={'full'}
          >
            <Flex width={'full'} pb={2}>
              <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
                help={onHelp}
              >
                <EditableText
                  placeholder={'Título do cartão'}
                  as={'textarea'}
                  flexGrow={1}
                  value={title}
                  onChange={setTitle}
                />
              </Actions>
            </Flex>
            <Flex width={'full'} justifyContent={'end'} pb={2}>
              <Button
                aria-label=""
                leftIcon={<FaBars />}
                colorScheme="secondary"
                variant={'outline'}
                onClick={onHelp}
              >
                Ajuda
              </Button>
            </Flex>
            <Flex flexDirection={'column'}>
              <Flex justifyContent={'flex-end'}></Flex>

              <AbstractCardContent
                category={category}
                content={content}
                onContentChange={setContent}
              />
              <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
              ></Actions>
            </Flex>
          </Flex>
        )}
      </Portal>
    </>
  );
}
