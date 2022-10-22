import React, { useEffect, useRef, useState } from 'react';
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
  IconButton,
  Portal,
  Spacer,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';

import { usePortal } from '../contexts/PortalContext';
import {
  HelpCard,
  HelpCardCategory,
  HelpCardQuestion,
  HelpCardQuestionResponse,
  HelpCardVariant,
} from '../../domain/help-card';
import { FaHome, FaTimes } from 'react-icons/fa';
import { useDebounce } from 'react-use';

const cardColors: Record<string, string> = {
  [HelpCardCategory.FUNCTIONAL]: 'primary',
  [HelpCardCategory.NON_FUNCTIONAL]: 'amethist',
  [HelpCardCategory.DATA]: 'cyan',
  [HelpCardCategory.RISK]: 'plum',
  [HelpCardCategory.ACCEPTANCE]: 'emerald',
};

function HelpCardCoverComponent({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const color = cardColors[category];
  return (
    <Flex p={2} color={`${color}.600`} justifyContent="stretch" width={'full'}>
      <Center flexDirection={'column'} width={'full'} gap={6}>
        <Square
          borderRadius="full"
          centerContent={true}
          bg={'white'}
          size={'90'}
          sx={{
            boxShadow: `0 8px 15px -15px var(--chakra-colors-${color}-800)`,
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
  const color = cardColors[category];

  function createHTMLfrom(htmlString: string) {
    return { __html: `${htmlString}` };
  }

  return (
    <Flex p={2} flexDirection="column">
      <Flex gap={2} height="fit-content" color={`${color}.600`}>
        <Center>
          <Square
            borderRadius="full"
            bg={'white'}
            centerContent={true}
            size={'fit-content'}
            p={2}
            alignSelf={'center'}
            sx={{
              boxShadow: `0 6px 8px -7px var(--chakra-colors-${color}-800)`,
            }}
          >
            <Icon fontSize={'sm'} as={FaHome} />
          </Square>
          <Heading textAlign={'center'} size={'xs'} ml={2}>
            {title}
          </Heading>
        </Center>
      </Flex>
      <Flex py={4}>
        <Text fontSize={'sm'} color={'fg.600'}>
          {description}
        </Text>
      </Flex>
      <Flex py={4} flexDirection={'column'}>
        <Heading fontSize={'sm'} mb={4}>
          Perguntas e Respostas
        </Heading>
        {questions.map((question: HelpCardQuestion, index: number) => (
          <Box key={index} mb={4} borderTopWidth={1} pt={4}>
            <Box fontWeight={'600'} mb={2}>
              <Box fontSize={'sm'}>
                {index + 1}. <Box as={'p'} display={'inline-block'} />
                <strong>{question.question}</strong>
              </Box>
            </Box>
            <Flex fontSize={'sm'} flexDirection="column" data-testid="response">
              {Array.isArray(question.response) ? (
                question.response.map((response: HelpCardQuestionResponse) => (
                  <Flex mb={2} flexDirection="column">
                    <strong>Exemplo {}:</strong>{' '}
                    <Flex
                      dangerouslySetInnerHTML={createHTMLfrom(
                        response as string
                      )}
                    ></Flex>
                  </Flex>
                ))
              ) : (
                <>
                  <strong>Exemplo:</strong>{' '}
                  <Flex
                    dangerouslySetInnerHTML={createHTMLfrom(question.response)}
                  ></Flex>
                </>
              )}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

function HelpCardComponent({ helpCard }: { helpCard: HelpCard }) {
  const color = cardColors[helpCard.category];

  return (
    <Flex
      borderWidth={1}
      borderColor={`${color}.200`}
      borderRadius="lg"
      minWidth={'270px'}
      width={'350px'}
      minHeight={'350px'}
      // bg={'bg.50'}
      bgGradient={`linear(to-t, bg.0, ${color}.50)`}
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

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollPosition };
};

export default function DrawerHelpCardsContainer({
  category,
  isOpen,
  onClose,
  helpCards,
}: DrawerHelpCardsContainerProps) {
  const { portalRightRef, contentRef } = usePortal();
  const { scrollPosition } = useScroll();

  return (
    <>
      <Portal containerRef={portalRightRef}>
        {isOpen && (
          <Flex
            height={'100vh'}
            flexDirection="column"
            borderWidth={1}
            shadow={'lg'}
            p={2}
            bg={'bg.0'}
            top={scrollPosition}
            position={'relative'}
            right={0}
          >
            <Flex p={2} gap={2} width="full">
              <IconButton
                size={'sm'}
                position={'absolute'}
                aria-label=""
                variant={'outline'}
                colorScheme={'secondary'}
                onClick={onClose}
                icon={<FaTimes />}
              ></IconButton>
              <Heading
                p={2}
                flexGrow="1"
                size={'md'}
                textAlign={'center'}
                alignSelf={'center'}
              >
                Cartas de Ajuda
              </Heading>
            </Flex>

            <Flex
              p={2}
              height={'100%'}
              flexDirection={'column'}
              overflow="auto"
              gap={4}
            >
              {helpCards.map((cardPerCategory: HelpCard[], index: number) => {
                return (
                  <Flex
                    flexDirection={'column'}
                    gap={2}
                    width={'fit-content'}
                    key={index}
                  >
                    {cardPerCategory.map(
                      (helpCard: HelpCard, jndex: number) => {
                        return (
                          <HelpCardComponent
                            key={`${index}-${jndex}`}
                            helpCard={helpCard}
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
