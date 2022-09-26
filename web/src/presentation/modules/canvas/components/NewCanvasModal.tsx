import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import Modal from '../../../components/Modal';
import useFormSubmit from '../../../hooks/useFormSubmit';

export default function NewCanvasModal({
  isOpen,
  onOpen,
  onClose,
  onSave,
}: any) {
  const { ref, submit, onSubmit } = useFormSubmit({ onFormData: onSave });

  return (
    <Modal
      title={'Novo Canvas'}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      size="2xl"
      onPrimaryClick={submit}
    >
      <Flex>
        <form ref={ref} onSubmit={onSubmit} style={{ width: '100%' }}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input name="name" />
          </FormControl>
        </form>
      </Flex>
    </Modal>
  );
}
