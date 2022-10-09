import {
  Editable,
  EditablePreview,
  EditableInput,
  Icon,
  Flex,
  useEditableControls,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Fa500Px, FaEdit } from 'react-icons/fa';

export default function EditableText({ value, onChange }: any) {
  const [isEditing, setOnEdit] = useState(false);
  return (
    <Flex>
      <Editable
        width={'full'}
        onEdit={() => setOnEdit(true)}
        onCancel={() => setOnEdit(false)}
        onSubmit={() => setOnEdit(false)}
        defaultValue={value}
        onChange={onChange}
        boxShadow={'none'}
      >
        <EditablePreview
          textAlign={'center'}
          width="full"
          borderWidth={3}
          borderColor={'transparent'}
          px={2}
        />

        <EditableInput
          textAlign={'center'}
          sx={{
            '&:focus': {
              boxShadow: 'xl',
            },
          }}
          px={2}
          width="full"
          borderWidth={3}
          borderColor={'primary.500'}
        />
      </Editable>
      {/* <Center>
        <Icon as={FaEdit} />
      </Center> */}
    </Flex>
  );
}
