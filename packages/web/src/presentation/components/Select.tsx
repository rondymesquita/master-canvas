import { Select as CharkaSelect } from '@chakra-ui/react';
import React from 'react';

export default function Select({
  placeholder,
  options,
  size,
  value,
  onChange,
}: any) {
  return (
    <CharkaSelect
      placeholder={placeholder}
      size={size}
      borderWidth={1}
      borderColor={'bg.500'}
      borderRadius={'md'}
      value={value}
      onChange={(event: any) => {
        console.log(event.target.value);
        onChange(event.target.value);
      }}
    >
      {options.map(([key, value]: [string, string]) => (
        <option value={key}>{value}</option>
      ))}
    </CharkaSelect>
  );
}
