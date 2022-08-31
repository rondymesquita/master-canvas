import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export default function Area(ctx: any) {
  // console.log({ ctx });

  return (
    <Box w="100%" h="200px" border="1px" p="4">
      <Flex>
        <Box>
          <Text>{ctx.title}</Text>
        </Box>
        <Spacer />
        <Box onClick={() => ctx.onAddClick()}>[+]</Box>
      </Flex>
    </Box>
  );
}
