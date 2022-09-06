import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Select,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AddIcon, InfoIcon } from '@chakra-ui/icons';

export default function Area({
  children,
  title,
  onAddClick,
  category,
}: any): JSX.Element {
  const [option, setOption] = useState('');

  useEffect(() => {
    console.log(option);
  }, [option]);

  return (
    <Box
      bg={'white'}
      data-testid="area"
      w="full"
      h={'full'}
      minH="300px"
      borderWidth="1px"
      p="2"
      // overflow="hidden"
    >
      <Flex>
        <Center>
          <InfoIcon />
        </Center>

        <Center padding={2}>
          <Heading as="h4" size="xs">
            {title}
          </Heading>
        </Center>
        <Spacer />
        <Center>
          <IconButton
            size={'xs'}
            colorScheme="primary"
            aria-label="button"
            onClick={() => onAddClick(category)}
            icon={<AddIcon />}
          ></IconButton>
        </Center>
      </Flex>
      <Flex p={0} flexWrap="wrap">
        {children}
      </Flex>
    </Box>
  );
}
