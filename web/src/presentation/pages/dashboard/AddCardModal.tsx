import { useDisclosure } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Modal from "../../components/Modal";

export const AddCardModal = forwardRef(function ({}: any, ref: any) {
  return (
    <div>
      <Modal ref={ref}>AddCardModal</Modal>
    </div>
  );
});
