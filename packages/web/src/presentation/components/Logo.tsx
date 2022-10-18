import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

// type Params = Parameters<typeof $>[0]
// type Returns = ReturnType<typeof $>
type LogoProps = TextProps;
export default function Logo({ color, fontSize }: LogoProps) {
  return (
    <Text
      fontFamily={'Russo One'}
      fontSize={fontSize ? fontSize : '4xl'}
      color={color ? color : 'white'}
      // textShadow="1px 2px var(--chakra-colors-gray-700)"
    >
      Canvas
    </Text>
  );
}
