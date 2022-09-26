import { Text } from '@chakra-ui/react';
import React from 'react';

export default function Logo({ color, size }: any) {
  return (
    <Text
      fontFamily={'Russo One'}
      fontSize={size ? size : '4xl'}
      color={color ? color : 'white'}
      textShadow="1px 2px var(--chakra-colors-gray-700)"
    >
      Canvaspace
    </Text>
  );
}
