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
export default function Header({ isLogged = true, user }: any) {
  const { execute } = useCommander();

  const onDownload = () => {
    execute(Command.EXPORT, {});
  };

  return (
    <header>
      <Flex bg={'primary.500'} px={4} py={2}>
        <Spacer />
        <Center>
          <Heading as={'h1'} size={'md'} color={'white'}>
            Canvas
          </Heading>
        </Center>
        <Spacer />
        <Flex color={'white'} gap={2}>
          {isLogged ? (
            <>
              <IconButton
                aria-label=""
                background={'primary.400'}
                colorScheme={'primary'}
                onClick={onDownload}
              >
                <DownloadIcon />
              </IconButton>
              <Button
                aria-label=""
                background={'primary.400'}
                colorScheme={'primary'}
                onClick={onDownload}
                leftIcon={<Icon as={FaUser} />}
              >
                Virginia
              </Button>
              <Button background={'primary.400'} colorScheme={'primary'}>
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
