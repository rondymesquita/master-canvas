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
import Area from '../../components/Area';
import Card from '../../components/Card';

import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

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
      <Center
        borderRadius={'md'}
        px={'36'}
        height={400}
        bg={'primary.500'}
        shadow="2xl"
      >
        <Flex flexDirection={'column'}>
          <Center pb="6">
            <Logo />
          </Center>
          {/* <Button
            colorScheme="primary"
            leftIcon={<Icon as={FaGoogle} />}
          >
            Login com Google
          </Button> */}
          <Button
            // variant={}
            as={Link}
            to={'/canvas'}
            colorScheme={'white'}
            bg={'white'}
            color="black"
            leftIcon={<Icon as={FaGoogle} />}
          >
            Login com Google
          </Button>
        </Flex>
      </Center>
    </Flex>
  );
}
