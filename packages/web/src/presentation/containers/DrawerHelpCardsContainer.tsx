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
  Spacer,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';

import { usePortal } from '../contexts/PortalContext';
import {
  HelpCard,
  HelpCardQuestion,
  HelpCardVariant,
} from '../../domain/help-card';
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
  questions,
}: {
  title: string;
  category: string;
  description: string;
  questions: HelpCardQuestion[];
}) {
  return (
    <Flex p={2} flexDirection="column" bg={'bg.100'}>
      <Flex gap={2} height="fit-content" color={'primary.600'}>
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
        {/* <Text>{description}</Text> */}
      </Flex>
      <Flex py={4}>
        <Text fontSize={'sm'} color={'fg.500'}>
          {description}
        </Text>
      </Flex>
      <Flex py={4} flexDirection={'column'}>
        <Heading fontSize={'sm'} mb={4}>
          Perguntas e Respostas
        </Heading>
        {questions.map((question: HelpCardQuestion, index: number) => (
          <Box key={index} mb={4}>
            <Box fontWeight={'600'} mb={2}>
              {/* <Text fontSize={'sm'}>{index}</Text> */}
              <Text fontSize={'sm'}>
                {index + 1}. <Box display={'inline-block'} />
                {question.question}
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              <strong>Exemplo:</strong> {question.response}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

function HelpCardComponent({ helpCard }: { helpCard: HelpCard }) {
  return (
    <Flex
      borderWidth={1}
      // borderColor={'primary.500'}
      borderRadius="lg"
      minWidth={'250px'}
      minHeight={'300px'}
      bg={'bg.50'}
      boxShadow={'lg'}
      p={4}
    >
      {helpCard.variant === HelpCardVariant.COVER ? (
        <HelpCardCoverComponent
          title={helpCard.title}
          category={helpCard.category}
        />
      ) : (
        <HelpCardDetailComponent
          title={helpCard.title}
          category={helpCard.category}
          description={helpCard.description}
          questions={helpCard.questions}
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
            height={'100vh'}
            width={'50%'}
            position={'fixed'}
            flexDirection="column"
            p={2}
            bg={'bg.0'}
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
              // bg={'bg.100'}
              bg={'white'}
              height={'100%'}
              flexDirection={'column'}
              overflow="auto"
            >
              {/* {JSON.stringify(helpCards[0])} */}

              {helpCards.map((cardPerCategory: HelpCard[]) => {
                return (
                  <Flex flexDirection={'row'} gap={2} width={'fit-content'}>
                    {cardPerCategory.map((helpCard: HelpCard) => {
                      return <HelpCardComponent helpCard={helpCard} />;
                    })}
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
