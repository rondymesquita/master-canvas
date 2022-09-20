import React, { useState } from 'react';
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
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
} from '@chakra-ui/react';

export default function CardEdit({
  isOpen,
  onOpen,
  onClose,
  onSave,
  content,
  title,
}: any) {
  const [editContent, setEditContent] = useState(content);

  const onContentChange = (newContent: string) => {
    console.log({ newContent });
    setEditContent(newContent);
  };

  const onSaveButtonClick = () => {
    onSave(editContent);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editable
              startWithEditView
              selectAllOnFocus={false}
              defaultValue={content}
              onChange={onContentChange}
            >
              <EditablePreview minHeight={100} />
              <EditableTextarea minHeight={100} />
            </Editable>
          </ModalBody>

          <ModalFooter>
            <Flex gap={4}>
              <Button variant="outline" onClick={onClose}>
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
