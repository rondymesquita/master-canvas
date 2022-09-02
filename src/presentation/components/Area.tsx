import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { AddIcon, InfoIcon } from "@chakra-ui/icons";

export default function Area({
  children,
  title,
  onAddClick,
  templates,
  category,
}: any): JSX.Element {
  const [option, setOption] = useState("");

  useEffect(() => {
    console.log(option);
  }, [option]);

  return (
    <Box
      w="100%"
      minH="200px"
      borderWidth="1px"
      p="2"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex>
        <Center>
          <InfoIcon />
        </Center>
        <Spacer />
        <Box>
          <Flex>
            <Center paddingX={2}>
              <Heading as="h4" size="sm">
                {title}
              </Heading>
            </Center>
            {/* <Box>
              <Select
                placeholder="Select option"
                onChange={(e) => setOption(e.target.value)}
              >
                {templates.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </Box> */}
            <Center>
              <IconButton
                size={"sm"}
                aria-label="button"
                onClick={() => onAddClick({ option, category })}
                icon={<AddIcon />}
              ></IconButton>
            </Center>
          </Flex>
        </Box>
      </Flex>
      <Flex>{children}</Flex>
    </Box>
  );
}
