import { Breadcrumb, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import HeaderContainer from '../containers/HeaderContainer';

export default function PageTemplate({ children }: any) {
  return (
    <Flex width={'full'} direction={'column'}>
      <Spacer />
      <HeaderContainer />
      <Container maxWidth={'container.lg'} pt={4}>
        <BreadcrumbContainer />
        <Flex flexDirection={'column'}>{children}</Flex>
      </Container>
    </Flex>
  );
}
