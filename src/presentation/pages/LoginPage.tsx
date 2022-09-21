import {
  addPrefix,
  Container,
  Flex,
  Box,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Heading,
  Center,
  useDisclosure,
  SimpleGrid,
  Spacer,
  Grid,
  GridItem,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Area from '../components/Area';
import Card from '../components/Card';

import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// const getEmptyCardUseCase = new GetEmptyCardUseCase();

export default function LoginPage() {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      bg={'gray.700'}
      width={'full'}
      height={'100vh'}
    >
      <Center borderRadius={'md'} px={'36'} height={400} bg={'primary.100'}>
        <Flex flexDirection={'column'}>
          <Center pb="6">
            <Heading>Canvas</Heading>
          </Center>
          {/* <Button
            colorScheme="primary"
            leftIcon={<Icon as={FaGoogle} />}
          >
            Login com Google
          </Button> */}
          <Button
            as={Link}
            to={'/'}
            colorScheme={'primary'}
            leftIcon={<Icon as={FaGoogle} />}
          >
            Login com Google
          </Button>
        </Flex>
      </Center>
    </Flex>
  );
}
