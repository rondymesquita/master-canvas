import {
  Editable,
  EditablePreview,
  EditableInput,
  Icon,
  Flex,
  useEditableControls,
  Center,
  EditableTextarea,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  Fa500Px,
  FaCheckCircle,
  FaEdit,
  FaPencilAlt,
  FaTimesCircle,
} from 'react-icons/fa';

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center">
      <IconButton
        aria-label=""
        icon={<FaTimesCircle />}
        variant={'outline'}
        colorScheme="secondary"
        {...getCancelButtonProps()}
      />
      <IconButton
        aria-label=""
        icon={<FaCheckCircle />}
        variant={'outline'}
        colorScheme="primary"
        {...getSubmitButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        aria-label=""
        variant={'outline'}
        colorScheme="secondary"
        icon={<FaPencilAlt />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
}

export default function EditableText({
  value,
  onChange,
  as,
  placeholder,
  minHeight = '2em',
}: any) {
  // const [isEditing, setOnEdit] = useState(false);

  return (
    <Flex gap={2} height={'100%'}>
      <Editable
        display={'flex'}
        flexDirection={'row'}
        gap={2}
        width={'full'}
        // onEdit={() => setOnEdit(true)}
        // onCancel={() => setOnEdit(false)}
        // onSubmit={() => setOnEdit(false)}
        defaultValue={value}
        onChange={onChange}
        boxShadow={'none'}
        placeholder={placeholder ? placeholder : ''}
      >
        <EditablePreview
          textAlign={'center'}
          width="full"
          borderWidth={1}
          px={2}
          minHeight={minHeight}
          borderColor={'primary.500'}
          bg={'primary.50'}
        />

        {as === 'input' ? (
          <EditableInput
            textAlign={'center'}
            sx={{
              '&:focus': {
                boxShadow: 'xl',
              },
            }}
            width="full"
            // borderWidth={3}
            borderColor={'primary.500'}
          />
        ) : (
          <EditableTextarea
            minHeight={minHeight}
            textAlign={'center'}
            borderWidth={1}
            sx={{
              '&:focus': {
                boxShadow: 'xl',
              },
            }}
            width="full"
            // borderWidth={3}
            borderColor={'primary.500'}
          />
        )}

        {/* <EditableControls /> */}
      </Editable>
      {/* <IconButton
        colorScheme={'secondary'}
        variant={'outline'}
        icon={<FaPencilAlt />}
        aria-label=""
      ></IconButton> */}
    </Flex>
  );
}
