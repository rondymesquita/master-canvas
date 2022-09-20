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
} from '@chakra-ui/react';

// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

import RichTextEditor from 'react-rte';
import EditableText from './EditableText';

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
      <Modal isOpen={isOpen} onClose={destroyAndClose} size={'lg'}>
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
            {/* <Editable
              startWithEditView
              selectAllOnFocus={false}
              defaultValue={content}
              onChange={onContentChange}
            >
              <EditablePreview minHeight={100} />
              <EditableTextarea minHeight={100} />
            </Editable> */}

            <RichTextEditor
              variant="filled"
              value={content}
              onChange={(newContent: any) => setContent(newContent)}
            />
            {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
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
