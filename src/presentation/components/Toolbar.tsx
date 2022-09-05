import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react';
import React from 'react';

export default function Toolbar({ onNewClick }: any) {
  return (
    <Flex>
      <Button
        onClick={onNewClick}
        colorScheme={'primary'}
        leftIcon={<AddIcon />}
      >
        Novo Card
      </Button>
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
    </Flex>
  );
}
