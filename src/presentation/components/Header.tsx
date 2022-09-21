import { DownloadIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { Command, useCommander } from '../contexts/CommanderContext';
import { FaUser } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import Logo from './Logo';
export default function Header({ isLogged = true, user }: any) {
  const { execute } = useCommander();

  const onDownload = () => {
    execute(Command.EXPORT, {});
  };

  return (
    <header>
      <Flex bg={'primary.500'} px={4} py={2} shadow={'base'}>
        {/* <Spacer /> */}
        <Center>
          <Box>
            <Logo size="2xl" />
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
                background={'primary.400'}
                colorScheme={'primary'}
                onClick={onDownload}
                leftIcon={<Icon as={FaUser} />}
              >
                Virginia
              </Button>
              <Button
                as={ReactLink}
                to={'/login'}
                background={'primary.400'}
                colorScheme={'primary'}
              >
                Logout
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
