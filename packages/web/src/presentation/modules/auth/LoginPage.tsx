import { Button, Center, Flex, Icon, Text } from '@chakra-ui/react';

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
      // bg={'gray.700'}
      bg={'primary.50'}
      width={'full'}
      height={'100vh'}
    >
      <Center
        borderRadius={'xl'}
        width={'clamp(fit-content, 50%, 400px)'}
        px={{
          base: 4,
          sm: 16,
          md: 24,
        }}
        height={400}
        bg={'white'}
        shadow="2xl"
      >
        <Flex flexDirection={'column'} gap={8}>
          <Center>
            <Logo color={'primary.600'} />
          </Center>
          <Button
            colorScheme={'primary'}
            onClick={() => {
              window.location.href = `${Env.getEnv().API_HOST}/auth/google`;
            }}
            leftIcon={<Icon as={FaGoogle} />}
          >
            Entrar com Google
          </Button>
          <Center>
            <Text maxW={'fit-content'} textAlign={'center'}>
              Se você não possuir uma conta no Canvas, uma nova será criada.
            </Text>
          </Center>
          <Center>
            {
              health && (
                <Flex
                  fontSize={'xs'}
                  direction={'column'}
                  color="foreground.400"
                >
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
          </Center>
        </Flex>
      </Center>
    </Flex>
  );
}
