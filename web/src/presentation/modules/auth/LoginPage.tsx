import { Button, Center, Flex, Icon } from '@chakra-ui/react';

import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { name, version } from '../../../../package.json';

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
        <Flex flexDirection={'column'} gap={8}>
          <Center>
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
          <Center color="primary.800">{name} - {version}</Center>
        </Flex>
      </Center>
    </Flex>
  );
}
