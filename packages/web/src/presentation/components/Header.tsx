import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../route/routes';
import Logo from './Logo';
export default function Header({ isLogged = true, user, onActionClick }: any) {
  return (
    <header>
      <Flex px={4} pt={2} pb={4} bg={'background.0'}>
        {/* <Spacer /> */}
        <Center>
          <Box>
            <Link to={HOME_PAGE}>
              <Logo color={'primary.500'} size="2xl" />
            </Link>
          </Box>
        </Center>
        <Spacer />
        <Flex gap={2}>
          {isLogged && (
            <>
              {/* {user.picture} */}
              <Center gap={2}>
                <Avatar size={'sm'} src={user.picture} />
                <Heading size={'sm'}>{user.name}</Heading>
                <Button
                  ml={8}
                  onClick={onActionClick ? onActionClick : () => {}}
                  // background={'primary.400'}
                  colorScheme={'destructive'}
                  variant={'ghost'}
                  size={'sm'}
                >
                  Sair
                </Button>
              </Center>
            </>
          )}
        </Flex>
      </Flex>
    </header>
  );
}
