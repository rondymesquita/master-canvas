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
import { FaPencilAlt, FaTrash, FaTrashAlt } from 'react-icons/fa';
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
      // cursor={'grab'}
      // onClick={onClick}
    >
      <Flex>
        {/* <Center>
          <InfoIcon />
        </Center> */}
        <Flex overflow={'hidden'} width={'full'}>
          <Text width={'full'} noOfLines={5}>
            {title}
          </Text>
        </Flex>
      </Flex>
      {/* <Text
        noOfLines={5}
        my="4"
        dangerouslySetInnerHTML={createHTMLfromContent()}
      ></Text> */}
      <Flex mt="4">
        <IconButton
          colorScheme={'yellow'}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          size={'xs'}
          aria-label=""
          icon={<FaPencilAlt />}
        />
        <Spacer />
        <IconButton
          colorScheme={'destructive'}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          size={'xs'}
          aria-label=""
          icon={<FaTrashAlt />}
        />
      </Flex>
    </Flex>
  );
}
