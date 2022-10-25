import { Center, Flex, Heading, Icon, Square } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export default function HelpCardCoverComponent({
  title,
  color,
  icon,
}: {
  title: string;
  color: string;
  icon: IconType;
}) {
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
          <Icon fontSize={'6xl'} as={icon} />
        </Square>
        <Heading size={'sm'} textAlign={'center'}>
          {title}
        </Heading>
      </Center>
    </Flex>
  );
}
