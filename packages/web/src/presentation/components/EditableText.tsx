import {
  Editable,
  EditablePreview,
  EditableInput,
  Icon,
  Flex,
  useEditableControls,
  Center,
  EditableTextarea,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Fa500Px, FaEdit } from 'react-icons/fa';

export default function EditableText({
  value,
  onChange,
  as,
  placeholder,
}: any) {
  const [isEditing, setOnEdit] = useState(false);
  const height = '4em';

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
        placeholder={placeholder ? placeholder : ''}
      >
        <EditablePreview
          textAlign={'center'}
          width="full"
          borderWidth={3}
          px={2}
          minHeight={height}
          borderColor={'primary.500'}
        />
        {as === 'input' ? (
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
        ) : (
          <EditableTextarea
            minHeight={height}
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
        )}
      </Editable>

      {/* <Center>
        <Icon as={FaEdit} />
      </Center> */}
    </Flex>
  );
}
