import { Box, Button, Center, Flex, Icon, Spacer } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../route/routes';
import Logo from './Logo';
export default function Header({
  isLogged = true,
  username,
  onActionClick,
}: any) {
  return (
    <header>
      <Flex bg={'primary.500'} px={4} py={2} shadow={'base'}>
        {/* <Spacer /> */}
        <Center>
          <Box>
            <Link to={HOME_PAGE}>
              <Logo size="2xl" />
            </Link>
          </Box>
        </Center>
        <Spacer />
        <Flex color={'white'} gap={2}>
          {isLogged ? (
            <>
              {/* <IconButton
                aria-label=""
                background={'primary.400'}
                colorScheme={'primary'}
                onClick={onDownload}
              >
                <DownloadIcon />
              </IconButton> */}
              <Button
                aria-label=""
                shadow={'none'}
                background={'primary.500'}
                colorScheme={'primary'}
                leftIcon={<Icon as={FaUser} />}
              >
                {username}
              </Button>
              <Button
                // as={ReactLink}
                onClick={onActionClick ? onActionClick : () => {}}
                // to={'/login'}
                background={'primary.400'}
                colorScheme={'primary'}
              >
                Sair
              </Button>
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </header>
  );
}
