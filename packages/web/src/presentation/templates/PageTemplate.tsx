import { Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

export default function PageTemplate({ children }: any) {
  return (
    <Flex width={'full'} direction={'column'}>
      <Spacer />
      <Header />
      <Container maxWidth={'container.lg'} pt={4}>
        {children}
      </Container>
    </Flex>
  );
}
