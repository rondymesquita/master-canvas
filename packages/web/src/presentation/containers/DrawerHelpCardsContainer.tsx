import React, { useRef } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Portal,
  Stack,
} from '@chakra-ui/react';

import { usePortal } from '../contexts/PortalContext';

export type DrawerHelpCardsContainerProps = {
  category: string;
  isOpen: boolean;
  onClose: () => void;
};
export default function DrawerHelpCardsContainer({
  category,
  isOpen,
  onClose,
}: DrawerHelpCardsContainerProps) {
  const { portalRightRef } = usePortal();

  return (
    <>
      <Portal containerRef={portalRightRef}>
        {isOpen && (
          <Flex
            bg={'background.500'}
            height={'100vh'}
            width={'full'}
            position={'fixed'}
          >
            <Flex>
              <Center>
                <Button onClick={onClose}>Close</Button>
                <Heading size={'md'}>Templates "{category}"</Heading>
              </Center>
            </Flex>

            <Flex></Flex>
          </Flex>
        )}
      </Portal>
    </>
  );
}
