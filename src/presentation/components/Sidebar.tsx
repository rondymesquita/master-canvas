import { InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MENU = ['cursos', 'objetivos'];

export default function Sidebar({ category, onClickMenuItem, ...props }: any) {
  const getColorScheme = (item: string) => {
    return item === category ? 'primary' : 'gray';
  };

  const style = {
    transition: ' all 0.3s ease-out',
  };

  return (
    <Box {...props} minHeight={400} minWidth={200}>
      <Heading fontSize={'2xl'}>Meu Canvas</Heading>
      <VStack mt={4}>
        {MENU.map((item) => {
          return (
            <Button
              sx={style}
              key={item}
              variant={'solid'}
              colorScheme={getColorScheme(item)}
              justifyContent={'start'}
              width="full"
              textAlign={'start'}
              leftIcon={<InfoIcon />}
              onClick={() => onClickMenuItem(item)}
            >
              {item}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}
