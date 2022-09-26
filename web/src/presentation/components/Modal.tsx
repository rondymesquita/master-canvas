import React, { forwardRef, useImperativeHandle } from 'react';

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
} from '@chakra-ui/react';
import { Bus } from '../../util/Bus';
import { ModalEvent } from '../../domain/events';
const bus = Bus.getInstance();

function Modal(
  {
    children,
    title,
    isOpen,
    onOpen,
    onClose,
    onCloseComplete,
    size,
    onPrimaryClick,
  }: any,
  ref: any
) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // bus.on(ModalEvent.ShowModal, () => {
  //   console.log("Show called");
  //   onOpen();
  // });

  // useImperativeHandle(ref, () => {
  //   return {
  //     show: () => {
  //       onOpen();
  //     },
  //     hide: () => {
  //       onClose();
  //     },
  //   };
  // });

  return (
    <>
      <CModal
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={onCloseComplete}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="primary"
              mr={3}
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              onClick={
                onPrimaryClick
                  ? () => {
                      onPrimaryClick();
                    }
                  : () => {}
              }
              colorScheme="primary"
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </CModal>
    </>
  );
}

export default forwardRef(Modal);
