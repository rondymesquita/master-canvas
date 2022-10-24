import React, { forwardRef, useImperativeHandle } from 'react';

import {
  Modal as ModalChakra,
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
import { ModalResultTypeModel, ModalTypeModel } from '../domain/modal';

export interface ModalProps {
  children: JSX.Element;
  title: string;
  type: ModalTypeModel;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCloseComplete?: () => void;
  setModalResult?: (r: ModalResultTypeModel) => void;
  onPrimaryClick?: () => void;
  secondaryLabel: string;
  primaryLabel: string;
  size?: string;
}
function Modal(
  {
    children,
    title,
    type = ModalTypeModel.INFO,
    isOpen,
    onOpen,
    onClose,
    onCloseComplete,
    setModalResult,
    onPrimaryClick,
    secondaryLabel = 'Cancelar',
    primaryLabel = 'Salvar',
    size = 'md',
  }: ModalProps,
  ref: any
) {
  const primaryButtonColor: Record<string, string> = {
    [ModalTypeModel.INFO]: 'primary',
    [ModalTypeModel.DESTRUCTIVE]: 'destructive',
  };

  return (
    <>
      <ModalChakra
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => {
          onCloseComplete && onCloseComplete();
        }}
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
              onClick={() => {
                setModalResult &&
                  setModalResult(ModalResultTypeModel.SECONDARY);
                onClose();
              }}
            >
              {secondaryLabel}
            </Button>
            <Button
              onClick={() => {
                onPrimaryClick && onPrimaryClick();
                setModalResult && setModalResult(ModalResultTypeModel.PRIMARY);
                onClose();
              }}
              colorScheme={primaryButtonColor[type]}
            >
              {primaryLabel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>
  );
}

export default forwardRef(Modal);
