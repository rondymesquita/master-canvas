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
  Text,
  Icon,
} from '@chakra-ui/react';

import EditableText from '../../../components/EditableText';
import { SunIcon } from '@chakra-ui/icons';
import { CardCategory } from '../../../../domain/model/card';
// import CardRequirementContent from './CardRequirementContent';
// import DataContent from './DataContent';
// import RiskContent from './RiskContent';
// import CardAcceptanceContent from './CardAcceptanceContent';
import AbstractCardContent from './AbstractCardContent';
import { FaBars, FaInfoCircle, FaSave, FaTimes } from 'react-icons/fa';
import { usePortal } from '../../../contexts/PortalContext';
import ReactQuill from 'react-quill';

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

  const { portalLeftRef, setPortalLeftVisible } = usePortal();
  const cardContentRef = useRef<any>();

  useEffect(() => {
    setPortalLeftVisible(isOpen);
  }, [isOpen]);

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
      <Portal containerRef={portalLeftRef} data-testid="portal-left-content">
        {isOpen && (
          <Flex
            height={'100vh'}
            // width={'full'}
            data-testid="edit-card-modal"
            bg={'bg.0'}
            p={2}
            position={'relative'}
            flexDirection={'column'}
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
                  flexShrink={1}
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
                Ver Cartas de Ajuda
              </Button>
            </Flex>
            {/* body */}
            <Flex
              mb={2}
              p={4}
              borderRadius="md"
              color="primary.700"
              bg="primary.50"
              borderWidth={'1px'}
              borderColor={'primary.700'}
            >
              <Center mr={2}>
                <Icon as={FaInfoCircle}></Icon>
              </Center>
              <Text>
                Os campos abaixo estão preenchidos com <b>exemplos</b> e você
                poderá utilizá-los ou não, <b>conforme sua necessidade</b>.
              </Text>
            </Flex>
            <Flex
              mb={2}
              p={4}
              borderRadius="md"
              color="primary.700"
              bg="primary.50"
              borderWidth={'1px'}
              borderColor={'primary.700'}
            >
              <Center mr={2}>
                <Icon as={FaInfoCircle}></Icon>
              </Center>
              <Text>
                Caso a visão não se aplique ao requisito, o campo poderá ficar
                <b>vazio</b> ou inserir o texto <b>"Não se aplica"</b>.
              </Text>
            </Flex>
            <Flex flexDirection={'column'} grow={1} overflow="auto">
              <AbstractCardContent
                ref={cardContentRef}
                category={category}
                content={content}
              />
            </Flex>
            <Flex justifyContent={'flex-end'}>
              {/* <Actions
                cancel={destroyAndClose}
                ok={onSaveButtonClick}
              ></Actions> */}
            </Flex>
          </Flex>
        )}
      </Portal>
    </>
  );
}
