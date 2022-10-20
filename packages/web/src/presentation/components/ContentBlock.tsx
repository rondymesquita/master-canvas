import { Box } from '@chakra-ui/react';
import React from 'react';

export default function ContentBlock({ children }: any) {
  return (
    <Box
      p="2"
      mb="4"
      borderWidth={1}
      borderColor={'primary.500'}
      borderRadius="md"
      bg={'white'}
    >
      {children}
    </Box>
  );
}
