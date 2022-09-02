import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
export default function Header() {
  return (
    <header>
      <Flex bg={"primary.500"} p={4} marginBottom="2">
        <Box>
          <Heading as={"h1"} size={"lg"} color={"white"}>
            Canvas
          </Heading>
        </Box>
        <Spacer />
        <Box color={"white"}>
          <SettingsIcon />
        </Box>
      </Flex>
    </header>
  );
}
