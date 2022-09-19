import { AddIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  MenuIcon,
  Spacer,
  Switch,
} from '@chakra-ui/react';
import React from 'react';

export default function Toolbar({
  onNewClick,
  zoomIn,
  zoomOut,
  zoomReset,
}: any) {
  return (
    <Flex p={4}>
      <Center px={4} hidden>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" m="0">
            Compacto
          </FormLabel>
          <Switch id="email-alerts" px={2} />
          <FormLabel htmlFor="email-alerts" m="0">
            Completo
          </FormLabel>
        </FormControl>
      </Center>
      <Center>
        <Button colorScheme={'primary'} onClick={zoomOut}>
          -
        </Button>
        <Button colorScheme={'primary'} onClick={zoomReset}>
          Reset
        </Button>
        <Button colorScheme={'primary'} onClick={zoomIn}>
          +
        </Button>
      </Center>
      <Spacer />
      <Button
        onClick={onNewClick}
        colorScheme={'primary'}
        leftIcon={<ViewIcon />}
      >
        Ver Cartas
      </Button>
    </Flex>
  );
}
