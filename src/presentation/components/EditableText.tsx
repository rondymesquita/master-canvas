import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React from 'react';

export default function EditableText({
  value,
  onChange,
  selectAllOnFocus,
}: any) {
  return (
    <Editable
      // startWithEditView
      selectAllOnFocus={true}
      defaultValue={value}
      onChange={onChange}
      borderWidth={1}
      px={2}
      // borderStyle="dotted"
      borderColor={'primary'}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
}
