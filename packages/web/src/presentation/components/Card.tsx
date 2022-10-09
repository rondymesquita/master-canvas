import {
  AddIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
  InfoIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  IconButton,
  Stack,
  EditableTextarea,
  Editable,
  EditablePreview,
} from '@chakra-ui/react';
import React from 'react';
import EditableQuestion from './EditableQuestion';
import LoremIpsum from './LoremIpsum';

export default function Card({
  title,
  description,
  content,
  onDelete,
  onQuestionChange,
  addQuestionClick,
  deleteQuestionClick,
  onClick,
}: any) {
  function createHTMLfromContent() {
    if (typeof content === 'string') {
      return { __html: `${content}` };
    }

    let cardDisplayContent = '';
    const values = Object.values(content);

    for (let index = 0; index < 1; index++) {
      // console.log(values[index]);
      if (values[index]) {
        cardDisplayContent += values[index] + '</br>';
        continue;
      }
      break;
    }

    return { __html: `${cardDisplayContent}` };
  }
  return (
    <Flex
      fontSize={'sm'}
      direction={'column'}
      bg={'yellow.100'}
      shadow={'base'}
      width={150}
      height={'fit-content'}
      borderWidth="1px"
      borderColor={'yellow.200'}
      padding={2}
      cursor={'pointer'}
      onClick={onClick}
    >
      <Flex>
        <Center>
          <InfoIcon />
        </Center>
        <Flex paddingLeft={2} overflow={'hidden'}>
          <Heading maxWidth={'100%'} as="h4" size="xs" noOfLines={1}>
            {title}
          </Heading>
        </Flex>
      </Flex>
      <Text
        noOfLines={5}
        my="4"
        dangerouslySetInnerHTML={createHTMLfromContent()}
      ></Text>
      <Flex mt="4">
        <Spacer />
        <IconButton
          colorScheme={'yellow'}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          size={'sm'}
          aria-label=""
          icon={<DeleteIcon />}
        />
      </Flex>
    </Flex>
  );
}
