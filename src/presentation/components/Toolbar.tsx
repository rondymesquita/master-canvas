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

export default function Toolbar({ onNewClick }: any) {
  return (
    <Flex>
      <Center px={4}>
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
