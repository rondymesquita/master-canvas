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
import CardRequirementContent from './CardRequirementContent';
import DataContent from './DataContent';
import RiskContent from './RiskContent';
import CardAcceptanceContent from './CardAcceptanceContent';
import AbstractCardContent from './AbstractCardContent';

function Actions({ children, cancel, ok }: any) {
  return (
    <Flex gap={2}>
      <Box>
        <Button colorScheme="secondary" variant="outline" onClick={cancel}>
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

            {/* <Center pl="4">
                <ModalCloseButton
                  ref={focusRef}
                  position={'relative'}
                  top={0}
                  right={0}
                />
              </Center> */}
          </ModalHeader>
          <ModalBody pt={4} bg={'white'}>
            <Flex justifyContent={'flex-end'}></Flex>

            <AbstractCardContent
              category={category}
              content={content}
              onContentChange={setContent}
            />

            {/* {(category === CardCategory.FUNCTIONAL ||
              category === CardCategory.NON_FUNCTIONAL) && (
              <CardRequirementContent
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

            {category === CardCategory.ACCEPTANCE && (
              <CardAcceptanceContent
                content={content}
                onContentChange={setContent}
              />
            )} */}
            <Actions cancel={destroyAndClose} ok={onSaveButtonClick}></Actions>
          </ModalBody>

          {/* <ModalFooter justifyContent={'center'}></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
