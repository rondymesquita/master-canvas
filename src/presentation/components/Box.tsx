import { Box as CBox } from "@chakra-ui/react";
import React from "react";

export default function Box(context: any) {
  console.log({ context });

  return (
    <CBox bg="tomato" w="100%" p={4} color="white" border={"1px"}>
      This is the Box
    </CBox>
  );
}
