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
import { CardCategory } from '../../domain/model/card';
import {
  FaChartPie,
  FaCheckCircle,
  FaDatabase,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFileSignature,
  FaListAlt,
  FaShieldAlt,
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
    [CardCategory.FUNCTIONAL]: FaFileSignature,
    [CardCategory.NON_FUNCTIONAL]: FaShieldAlt,
    [CardCategory.DATA]: FaDatabase,
    [CardCategory.RISK]: FaExclamationTriangle,
    [CardCategory.ACCEPTANCE]: FaCheckCircle,
  };

  const colors: Record<string, string> = {
    [CardCategory.FUNCTIONAL]: 'primary',
    [CardCategory.NON_FUNCTIONAL]: 'primary',
    [CardCategory.DATA]: 'amethist',
    [CardCategory.RISK]: 'orange',
    [CardCategory.ACCEPTANCE]: 'emerald',
  };

  const Icon = icons[category];
  const color = colors[category];

  return (
    <Box
      // bg={'bg.100'}
      bg={`${color}.50`}
      w="full"
      h={'full'}
      minH={600}
      outline={'solid'}
      sx={{
        outlineWidth: '1px',
      }}
      outlineColor={'bg.500'}
      // borderWidth="1px"
      // borderColor={'bg.500'}
      p="4"
    >
      <Flex mb={2}>
        <Center color={`${color}.500`} fontSize="xl">
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
