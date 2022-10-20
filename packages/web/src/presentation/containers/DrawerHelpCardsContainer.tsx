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
  Icon,
  Portal,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';

import { usePortal } from '../contexts/PortalContext';
import { HelpCard, HelpCardVariant } from '../../domain/help-card';
import { FaHome } from 'react-icons/fa';

function HelpCardCoverComponent({ title, category }: any) {
  return (
    <Flex p={2} color={'primary.600'}>
      <Center flexDirection={'column'} width={'full'} gap={6}>
        <Square
          borderRadius="full"
          centerContent={true}
          bg={'white'}
          size={'90'}
          sx={{
            boxShadow: '0 8px 15px -15px var(--chakra-colors-primary-800)',
          }}
        >
          <Icon fontSize={'6xl'} as={FaHome} />
        </Square>
        <Heading size={'sm'} textAlign={'center'}>
          {title}
        </Heading>
      </Center>
    </Flex>
  );
}
function HelpCardDetailComponent({
  title,
  category,
  description,
  content,
}: any) {
  return (
    <Flex p={2} flexDirection="column">
      <Flex gap={2} height="fit-content" pb={2} color={'primary.600'}>
        <Square
          borderRadius="full"
          // borderColor={'primary.500'}
          // borderWidth={1}
          centerContent={true}
          bg={'white'}
          size={'fit-content'}
          p={2}
          alignSelf={'center'}
          sx={{
            boxShadow: '0 6px 8px -7px var(--chakra-colors-primary-800)',
          }}
        >
          <Icon fontSize={'sm'} as={FaHome} />
        </Square>
        <Heading textAlign={'center'} size={'xs'}>
          {title}
        </Heading>
      </Flex>
      <Flex>
        <Text fontSize={'0.75em'} color={'foreground.500'}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

function HelpCardComponent({
  title,
  variant,
  category,
  description,
  content,
}: any) {
  return (
    <Flex
      borderWidth={1}
      // borderColor={'primary.500'}
      borderRadius="lg"
      width={'200px'}
      height={'300px'}
      bg={'background.50'}
      boxShadow={'lg'}
    >
      {variant === HelpCardVariant.COVER ? (
        <HelpCardCoverComponent title={title} category={category} />
      ) : (
        <HelpCardDetailComponent
          title={title}
          category={category}
          description={description}
          content={content}
        />
      )}
    </Flex>
  );
}

export type DrawerHelpCardsContainerProps = {
  category: string;
  isOpen: boolean;
  onClose: () => void;
  helpCards: HelpCard[][];
};

export default function DrawerHelpCardsContainer({
  category,
  isOpen,
  onClose,
  helpCards,
}: DrawerHelpCardsContainerProps) {
  const { portalRightRef } = usePortal();

  return (
    <>
      <Portal containerRef={portalRightRef}>
        {isOpen && (
          <Flex
            // bg={'background.100'}

            height={'100vh'}
            width={'50%'}
            position={'fixed'}
            flexDirection="column"
            p={2}
          >
            <Flex pb={2}>
              <Center>
                <Button
                  variant={'outline'}
                  colorScheme={'secondary'}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Heading size={'md'}>Templates "{category}"</Heading>
              </Center>
            </Flex>

            <Flex
              p={2}
              // bg={'background.100'}
              bg={'white'}
              height={'100%'}
              flexDirection={'column'}
              overflow="auto"
            >
              {JSON.stringify(helpCards[0])}

              {helpCards.map((cardPerCategory: HelpCard[]) => {
                return (
                  <Flex flexDirection={'row'}>
                    {cardPerCategory.map(
                      ({
                        title,
                        variant,
                        category,
                        description,
                        content,
                      }: HelpCard) => {
                        return (
                          <HelpCardComponent
                            title={title}
                            variant={variant}
                            category={category}
                            description={description}
                            content={description}
                          />
                        );
                      }
                    )}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        )}
      </Portal>
    </>
  );
}
