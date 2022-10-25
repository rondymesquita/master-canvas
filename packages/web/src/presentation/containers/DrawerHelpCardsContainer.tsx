import { Flex, Heading, IconButton, Portal } from '@chakra-ui/react';
import { useEffect } from 'react';

import {
  FaCheckCircle,
  FaDatabase,
  FaExclamationTriangle,
  FaFileSignature,
  FaShieldAlt,
  FaTimes,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { HelpCard, HelpCardCategory } from '../../domain/model/help-card';
import { usePortal } from '../contexts/PortalContext';
import HelpCardComponent from './HelpCardContainer';

const cardColors: Record<string, string> = {
  [HelpCardCategory.FUNCTIONAL]: 'primary',
  [HelpCardCategory.NON_FUNCTIONAL]: 'primary',
  [HelpCardCategory.DATA]: 'amethist',
  [HelpCardCategory.RISK]: 'plum',
  [HelpCardCategory.ACCEPTANCE]: 'emerald',
  [HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION]: 'amber',
  [HelpCardCategory.DATA_NEEDS]: 'pink',
};

const cardIcons: Record<string, IconType> = {
  [HelpCardCategory.FUNCTIONAL]: FaFileSignature,
  [HelpCardCategory.NON_FUNCTIONAL]: FaShieldAlt,
  [HelpCardCategory.DATA]: FaDatabase,
  [HelpCardCategory.RISK]: FaExclamationTriangle,
  [HelpCardCategory.ACCEPTANCE]: FaCheckCircle,
  [HelpCardCategory.FUNCTIONAL_NON_FUNCTIONAL_SPECIFICATION]: FaFileSignature,
  [HelpCardCategory.DATA_NEEDS]: FaDatabase,
};

export type DrawerHelpCardsContainerProps = {
  isOpen: boolean;
  onClose: () => void;
  helpCards: HelpCard[][];
};

export default function DrawerHelpCardsContainer({
  isOpen,
  onClose,
  helpCards,
}: DrawerHelpCardsContainerProps) {
  const { portalRightRef, setPortalRightVisible } = usePortal();

  useEffect(() => {
    setPortalRightVisible(isOpen);
  }, [isOpen]);

  return (
    <>
      <Portal containerRef={portalRightRef} data-testid="portal-right-content">
        {isOpen && (
          <Flex
            data-testid="edit-card-modal"
            height={'100vh'}
            width={'full'}
            flexDirection="column"
            borderWidth={1}
            shadow={'lg'}
            p={2}
            bg={'bg.0'}
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
                            color={cardColors[helpCard.category]}
                            icon={cardIcons[helpCard.category]}
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
