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

export default function NewProjectModal({
  isOpen,
  onOpen,
  onClose,
  onSave,
}: any) {
  const onFormData = (data: any) => {
    console.log({ data });
    onSave(data);
  };
  const { ref, submit, onSubmit } = useFormSubmit({ onFormData });

  return (
    <Modal
      title={'Novo Projeto'}
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
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </form>
      </Flex>
    </Modal>
  );
}
