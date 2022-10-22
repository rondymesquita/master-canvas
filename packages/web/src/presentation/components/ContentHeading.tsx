import { SunIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading, Icon } from '@chakra-ui/react';
import React from 'react';

export default function ContentHeading({ children, icon }: any) {
  const iconFontSize = '3xl';
  return (
    <Flex>
      <Center p="2">
        {icon ? (
          <Icon as={icon} fontSize={iconFontSize} />
        ) : (
          <SunIcon fontSize={iconFontSize} />
        )}
      </Center>
      <Center p="2">
        <Heading textAlign={'center'} size="md">
          {children}
        </Heading>
      </Center>
    </Flex>
  );
}
