import React, { useEffect, useRef, useState } from 'react';
import {
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
import { CardCategory } from '../../../../domain/model/card';
// import CardRequirementContent from './CardRequirementContent';
// import DataContent from './DataContent';
// import RiskContent from './RiskContent';
// import CardAcceptanceContent from './CardAcceptanceContent';
import AbstractCardContent from './AbstractCardContent';
import { FaBars, FaSave, FaTimes } from 'react-icons/fa';
import { usePortal } from '../../../contexts/PortalContext';
import ReactQuill from 'react-quill';
import Modal from '../../../components/Modal';
import ConfirmationDialog from '../../../components/ConfirmationDialog';

function Actions({ children, cancel, ok, help }: any) {
  return (
    <Flex gap={2} width="full">
      <Button
        leftIcon={<FaTimes />}
        colorScheme="secondary"
        variant="outline"
        onClick={cancel}
      >
        Voltar
      </Button>
      <Spacer />
      <Box flexShrink={1}>{children}</Box>
      <Spacer />
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
  content,
}: any) {
  const [title, setTitle] = useState(inputTitle);

  const cardContentRef = useRef<any>();

  const onSaveButtonClick = () => {
    const updatedContent = cardContentRef.current.getUpdatedContent();

    onSave({
      title,
      content: updatedContent,
    });
    onClose();
  };

  const destroyAndClose = () => {
    setTitle('');
    onClose();
  };

  if (!category) {
    return <>no category</>;
  }

  return (
    <>
      <Modal
        isFixedHeader={true}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
        header={
          <>
            <Flex>
              <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
                help={onHelp}
              >
                <EditableText
                  placeholder={'Título do cartão'}
                  as={'textarea'}
                  flexShrink={1}
                  value={title}
                  onChange={setTitle}
                />
              </Actions>
            </Flex>
            <Flex justifyContent={'end'}>
              <Button
                aria-label=""
                leftIcon={<FaBars />}
                colorScheme="secondary"
                variant={'outline'}
                onClick={onHelp}
              >
                Ver Cartas de Ajuda
              </Button>
            </Flex>
          </>
        }
      >
        <Flex
          data-testid="edit-card-modal"
          bg={'bg.0'}
          p={0}
          position={'relative'}
          flexDirection={'column'}
        >
          <Flex flexDirection={'column'} grow={1}>
            <AbstractCardContent
              ref={cardContentRef}
              category={category}
              content={content}
            />
          </Flex>
          <Flex justifyContent={'flex-end'}></Flex>
        </Flex>
      </Modal>
    </>
  );
}
