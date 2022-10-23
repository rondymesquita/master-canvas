import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import useFormSubmit from '../../../hooks/useFormSubmit';

export default function EditCanvasModal({
  canvas,
  isOpen,
  onOpen,
  onClose,
  onEdit,
}: any) {
  const { ref, submit, onSubmit } = useFormSubmit({ onFormData: onEdit });

  const [state, setState] = useState(canvas);

  const onChange = (newValue: string, name: string) => {
    setState((prevState: any) => ({ ...prevState, ...{ [name]: newValue } }));
  };

  return (
    <Modal
      title={`Editar "${canvas?.title}"`}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      size="2xl"
      onPrimaryClick={submit}
    >
      <Flex direction={'column'}>
        <form ref={ref} onSubmit={onSubmit} style={{ width: '100%' }}>
          <VisuallyHiddenInput name="id" defaultValue={state?.id} />

          <FormControl>
            <FormLabel>Novo nome</FormLabel>
            <Input
              name="title"
              defaultValue={state?.title}
              onChange={(e) => onChange(e.target.value, 'title')}
            />
          </FormControl>
        </form>
      </Flex>
    </Modal>
  );
}
