import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Square,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import {
  HelpCardQuestion,
  HelpCardQuestionResponse,
} from '../../domain/model/help-card';

export default function HelpCardDetailComponent({
  title,
  description,
  color,
  icon,
  questions,
}: {
  title: string;
  description: string;
  color: string;
  icon: IconType;
  questions: HelpCardQuestion[];
}) {
  // const color = cardColors[category];

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
            <Icon fontSize={'sm'} as={icon} />
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
                question.response.map(
                  (response: HelpCardQuestionResponse, jndex: number) => (
                    <Flex
                      key={`${index}-${jndex}`}
                      mb={2}
                      flexDirection="column"
                    >
                      <strong>Exemplo {}:</strong>{' '}
                      <Flex
                        flexDirection="column"
                        dangerouslySetInnerHTML={createHTMLfrom(
                          response as string
                        )}
                      ></Flex>
                    </Flex>
                  )
                )
              ) : (
                <>
                  <strong>Exemplo:</strong>{' '}
                  <Flex
                    flexDirection="column"
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
