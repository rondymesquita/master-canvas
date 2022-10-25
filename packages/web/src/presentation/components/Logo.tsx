import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type LogoProps = TextProps;
export default function Logo({ color, fontSize }: LogoProps) {
  return (
    <Text
      fontFamily={'Russo One'}
      fontSize={fontSize ? fontSize : '2xl'}
      color={color ? color : 'white'}
      // textShadow="1px 2px var(--chakra-colors-gray-700)"
    >
      FERSI
    </Text>
  );
}
