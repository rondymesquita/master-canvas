import React, { forwardRef, useImperativeHandle, useRef } from 'react';

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
  Icon,
} from '@chakra-ui/react';
import { Bus } from '../../util/Bus';
import { ModalEvent } from '../../domain/model/events';
import { ModalResultTypeModel, ModalTypeModel } from '../../domain/ui/modal';
import { IconType } from 'react-icons/lib';
import { FaHome, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { ArrowBackIcon } from '@chakra-ui/icons';

export interface ModalProps {
  children: JSX.Element;
  title: string;
  type?: ModalTypeModel;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCloseComplete?: () => void;
  setModalResult?: (r: ModalResultTypeModel) => void;
  onPrimaryClick?: () => void;
  secondaryLabel?: string;
  primaryLabel?: string;
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
  const secondaryButtonRef = useRef();

  const primaryButtonColor: Record<string, string> = {
    [ModalTypeModel.INFO]: 'primary',
    [ModalTypeModel.DESTRUCTIVE]: 'destructive',
  };

  const primaryButtonIcon: Record<string, IconType> = {
    [ModalTypeModel.INFO]: FaHome,
    [ModalTypeModel.DESTRUCTIVE]: FaTrashAlt,
  };

  return (
    <>
      <ModalChakra
        initialFocusRef={secondaryButtonRef}
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

          <ModalFooter gap={2}>
            <Button
              ref={secondaryButtonRef}
              leftIcon={<FaTimes />}
              variant="ghost"
              colorScheme="primary"
              onClick={() => {
                setModalResult &&
                  setModalResult(ModalResultTypeModel.SECONDARY);
                onClose();
              }}
            >
              {secondaryLabel}
            </Button>
            <Button
              leftIcon={<Icon as={primaryButtonIcon[type]} />}
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
