import { Box, Flex, IconButton, Select, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { AddIcon } from "@chakra-ui/icons";

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
    <Box w="100%" h="200px" border="1px" p="4">
      <Flex>
        <Box>
          <Text>{title}</Text>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <Box>
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
            </Box>
            <Box>
              <IconButton
                onClick={() => onAddClick({ option, category })}
                icon={<AddIcon />}
              ></IconButton>
            </Box>
          </Flex>
        </Box>
        {/* <Box onClick={() => onAddClick()}>[+]</Box> */}
      </Flex>
      <Flex>{children}</Flex>
    </Box>
  );
}
