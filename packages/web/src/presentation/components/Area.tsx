import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Select,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AddIcon, InfoIcon } from '@chakra-ui/icons';
import { CardCategory } from '../../domain/card';
import {
  FaChartPie,
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaListAlt,
  FaSun,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export default function Area({
  children,
  title,
  onAddClick,
  category,
}: any): JSX.Element {
  const icons: Record<string, IconType> = {
    [CardCategory.FUNCTIONAL]: FaListAlt,
    [CardCategory.NON_FUNCTIONAL]: FaListAlt,
    [CardCategory.DATA]: FaChartPie,
    [CardCategory.RISK]: FaExclamationTriangle,
    [CardCategory.ACCEPTANCE]: FaCheckCircle,
  };

  const Icon = icons[category];

  return (
    <Box
      bg={'background.0'}
      w="full"
      h={'full'}
      minH={600}
      borderWidth="1px"
      borderColor={'background.500'}
      p="2"
    >
      <Flex>
        <Center>
          <Icon />
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
            borderRadius={'full'}
            colorScheme="primary"
            aria-label="button"
            onClick={() => onAddClick(category)}
            icon={<AddIcon />}
          ></IconButton>
        </Center>
      </Flex>
      <Flex p={0} flexWrap="wrap" gap={2}>
        {children}
      </Flex>
    </Box>
  );
}
