import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React from 'react';

export default function EditableText({
  value,
  onChange,
  selectAllOnFocus,
}: any) {
  return (
    <Editable
      // width={'100%'}
      // startWithEditView
      selectAllOnFocus={true}
      defaultValue={value}
      onChange={onChange}
      // borderBottomWidth={4}
      // borderColor={'primary.500'}
    >
      <EditablePreview px={2} shadow={'inner'} width="full" bg={'gray.200'} />
      <EditableInput px={2} />
    </Editable>
  );
}
