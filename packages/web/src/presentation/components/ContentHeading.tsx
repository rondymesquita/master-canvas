import { SunIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function ContentHeading({ children }: any) {
  return (
    <Flex>
      <Center p="2">
        <SunIcon fontSize={'4xl'} />
      </Center>
      <Center p="2">
        <Heading textAlign={'center'} size="lg">
          {children}
        </Heading>
      </Center>
    </Flex>
  );
}
