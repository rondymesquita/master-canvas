import { Breadcrumb, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import HeaderContainer from '../containers/HeaderContainer';

export default function PageTemplate({ children, titleBar, toolBar }: any) {
  return (
    <Flex width={'full'} direction={'column'}>
      <HeaderContainer />
      <Flex
        px={4}
        bg={'white'}
        outline={'solid'}
        sx={{
          outlineWidth: '1px',
        }}
        outlineColor={'bg.300'}
      >
        <Container
          maxWidth={'container.lg'}
          p={2}
          // background={'white'}
          // shadow={'base'}
        >
          <BreadcrumbContainer />
          {titleBar && (
            <Flex flexDirection={'column'} py={2}>
              {titleBar}
            </Flex>
          )}
          {toolBar && (
            <Flex flexDirection={'column'} py={2}>
              {toolBar}
            </Flex>
          )}
          <Flex flexDirection={'column'}>{children}</Flex>
          {/* <Flex flexDirection={'row'} gap={4} maxWidth="100%">
            <Flex width={'100%'} flexShrink={1}>
              {children}
            </Flex>
          </Flex> */}
        </Container>
      </Flex>
    </Flex>
  );
}
