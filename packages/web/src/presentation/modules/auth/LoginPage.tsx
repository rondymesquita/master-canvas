import { Button, Center, Flex, Icon } from '@chakra-ui/react';

import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { name, version } from '../../../../package.json';
import useUser from '../../../app/usecase/user/useUser';
import { Env } from '../../../config/env';
import useGetAppHealth from '../../../app/usecase/health/useGetAppHealth';
import { Health } from '../../../domain/health';

// const getEmptyCardUseCase = new GetEmptyCardUseCase();

export default function LoginPage() {
  const { user, setUser } = useUser();
  const [health] = useGetAppHealth();

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
            // as={Link}
            onClick={() => {
              // @ts-ignore
              window.location = `${Env.getEnv().API_HOST}/auth/google`;
            }}
            // to={{ pathname: `${Env.getEnv().API_HOST}/auth/google` }}
            colorScheme={'white'}
            bg={'white'}
            color="black"
            leftIcon={<Icon as={FaGoogle} />}
          >
            Login com Google
          </Button>
          {
            health && (
              <Flex direction={'column'} color="primary.900">
                <Center>
                  {name} - {version}
                </Center>
                <Center>
                  {health.name} - {health.version}
                </Center>
                <Center>
                  {health.services[0].name} - {health.services[0].status}
                </Center>
              </Flex>
            )
            /* {JSON.stringify(health)} */
          }
        </Flex>
      </Center>
    </Flex>
  );
}
