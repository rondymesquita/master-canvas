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
import { FaEdit, FaPencilAlt, FaTrash, FaTrashAlt } from 'react-icons/fa';
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
      // shadow={'md'}
      shadow="0 12px 11px -9px rgb(0 0 12 / 48%), 0 0px 12px -7px rgb(0 0 1000 / 48%)"
      width={150}
      height={'fit-content'}
      // borderWidth={1}
      borderLeftWidth={10}
      borderColor={'yellow.300'}
      px={2}
      pt={4}
      pb={1}
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
          colorScheme={'destructive'}
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          aria-label=""
          icon={<FaTrashAlt />}
        />
        <Spacer />
        <IconButton
          colorScheme={'primary'}
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          aria-label=""
          icon={<FaPencilAlt />}
        />
      </Flex>
    </Flex>
  );
}
