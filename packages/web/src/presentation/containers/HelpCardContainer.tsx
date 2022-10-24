import { Flex } from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';
import { HelpCard, HelpCardVariant } from '../../domain/model/help-card';
import HelpCardCoverComponent from '../components/HelpCardCoverComponent';
import HelpCardDetailComponent from '../components/HelpCardDetailComponent';

export default function HelpCardComponent({
  helpCard,
  color,
}: {
  helpCard: HelpCard;
  color: string;
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
          icon={FaLightbulb}
          title={helpCard.title}
        />
      ) : (
        <HelpCardDetailComponent
          color={color}
          icon={FaLightbulb}
          title={helpCard.title}
          description={helpCard.description}
          questions={helpCard.questions}
        />
      )}
    </Flex>
  );
}
