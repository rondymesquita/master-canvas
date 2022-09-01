import React, { forwardRef, useImperativeHandle } from "react";

import {
  Modal as CModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Bus } from "../../util/Bus";
import { ModalEvent } from "../../domain/events";
const bus = Bus.getInstance();

function Modal({ children, onCloseComplete }: any, ref: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // bus.on(ModalEvent.ShowModal, () => {
  //   console.log("Show called");
  //   onOpen();
  // });

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        onOpen();
      },
      hide: () => {
        onClose();
      },
    };
  });

  return (
    <>
      <CModal
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={onCloseComplete}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </CModal>
    </>
  );
}

export default forwardRef(Modal);
