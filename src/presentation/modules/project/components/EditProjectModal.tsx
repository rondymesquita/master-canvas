import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import useFormSubmit from '../../../hooks/useFormSubmit';

export default function EditProjectModal({
  project,
  isOpen,
  onOpen,
  onClose,
  onEdit,
}: any) {
  const onFormData = (data: any) => {
    console.log({ data });
    onEdit(data);
  };
  const { ref, submit, onSubmit } = useFormSubmit({ onFormData });

  const [state, setState] = useState(project);
  // console.log({ state, project });

  const onChange = (newValue: string, name: string) => {
    setState((prevState: any) => ({ ...prevState, ...{ [name]: newValue } }));
  };

  return (
    <Modal
      title={`Editar Projeto ${project.id}`}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      size="2xl"
      onPrimaryClick={submit}
    >
      <Flex direction={'column'}>
        <div>{JSON.stringify(state)}</div>
        <form ref={ref} onSubmit={onSubmit} style={{ width: '100%' }}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              name="name"
              defaultValue={state.name}
              onChange={(e) => onChange(e.target.value, 'name')}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </form>
      </Flex>
    </Modal>
  );
}
