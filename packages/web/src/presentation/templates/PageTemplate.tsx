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
      <Flex
        px={4}
        borderRadius={'2xl'}
        bg={'background.100'}
        zIndex={999}
        top={'-4'}
        position={'relative'}
        boxShadow={'inner'}
      >
        <Container
          maxWidth={'container.lg'}
          p={4}
          // background={'white'}
          // shadow={'base'}
        >
          <BreadcrumbContainer />
          <Flex flexDirection={'column'}>{children}</Flex>
        </Container>
      </Flex>
    </Flex>
  );
}
