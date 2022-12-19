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
      <Flex px={2} py={2} bg={'bg.0'}>
        <Center px={8}>
          <Box>
            <Link
              to={HOME_PAGE}
              style={{
                textDecoration: 'none',
              }}
            >
              <Logo color={'primary.600'} size="2xl" />
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
                  onClick={onActionClick ? onActionClick : () => {}}
                  colorScheme={'destructive'}
                  variant={'ghost'}
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
