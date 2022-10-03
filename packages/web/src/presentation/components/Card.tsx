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
    return { __html: `${content.persona} ${content.business}` };
  }
  return (
    <Flex
      fontSize={'sm'}
      direction={'column'}
      bg={'yellow.100'}
      shadow={'md'}
      width={150}
      height={'fit-content'}
      borderWidth="1px"
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
