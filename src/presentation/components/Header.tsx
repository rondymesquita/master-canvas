import { DownloadIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import { Command, useCommander } from "../contexts/CommanderContext";
export default function Header() {
  const { execute } = useCommander();

  const onDownload = () => {
    execute(Command.EXPORT, {});
  };

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
          <IconButton
            aria-label=""
            background={"primary.400"}
            colorScheme={"primary"}
            onClick={onDownload}
          >
            <DownloadIcon />
          </IconButton>
        </Box>
        <Box color={"white"} pl="4">
          {/* <SettingsIcon /> */}
        </Box>
      </Flex>
    </header>
  );
}
