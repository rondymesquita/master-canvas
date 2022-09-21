import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React from 'react';

export default function EditableText({ value, onChange }: any) {
  return (
    <Editable
      // startWithEditView={false}
      // isPreviewFocusable={false}
      // width={'100%'}
      // startWithEditView
      // selectAllOnFocus={true}
      defaultValue={value}
      onChange={onChange}
      boxShadow={'none'}
      // borderBottomWidth={4}
      // borderColor={'primary.500'}
    >
      <EditablePreview
        width="full"
        borderWidth={1}
        borderColor={'primary.500'}
        px={2}
      />
      <EditableInput
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
  );
}
