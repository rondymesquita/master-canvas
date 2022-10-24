import { Flex } from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { HelpCard, HelpCardVariant } from '../../domain/model/help-card';
import HelpCardCoverComponent from '../components/HelpCardCoverComponent';
import HelpCardDetailComponent from '../components/HelpCardDetailComponent';

export default function HelpCardComponent({
  helpCard,
  color,
  icon,
}: {
  helpCard: HelpCard;
  color: string;
  icon: IconType;
}) {
  return (
    <Flex
      borderWidth={1}
      borderColor={`${color}.200`}
      borderRadius="lg"
      minWidth={'270px'}
      minHeight={'350px'}
      bgGradient={`linear(to-t, bg.0, ${color}.50)`}
      boxShadow={'lg'}
      p={4}
    >
      {helpCard.variant === HelpCardVariant.COVER ? (
        <HelpCardCoverComponent
          color={color}
          icon={icon}
          title={helpCard.title}
        />
      ) : (
        <HelpCardDetailComponent
          color={color}
          icon={icon}
          title={helpCard.title}
          description={helpCard.description}
          questions={helpCard.questions}
        />
      )}
    </Flex>
  );
}
