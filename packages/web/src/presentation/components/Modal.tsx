import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
} from 'react';

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
  Box,
  Flex,
} from '@chakra-ui/react';
import { Bus } from '../../util/Bus';
import { ModalEvent } from '../../domain/model/events';
import { ModalResultTypeModel, ModalTypeModel } from '../../domain/ui/modal';
import { IconType } from 'react-icons/lib';
import { FaHome, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { ArrowBackIcon } from '@chakra-ui/icons';

export interface ModalProps {
  children: JSX.Element;
  title?: string;
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
  header?: JSX.Element;
  footer?: JSX.Element;
  initialFocusRef?: RefObject<any>;
  isFixedHeader?: boolean;
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
    header,
    footer,
    initialFocusRef = null,
    isFixedHeader = false,
  }: ModalProps,
  ref: any
) {
  return (
    <>
      <ModalChakra
        // sx={{ height: '100vh' }}
        initialFocusRef={initialFocusRef}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => {
          onCloseComplete && onCloseComplete();
        }}
        size={size}
      >
        <ModalOverlay />
        <ModalContent height={isFixedHeader && size === 'full' ? '1' : 'auto'}>
          {title && <ModalHeader>{title}</ModalHeader>}
          {header && (
            <ModalHeader>
              <Flex flexDirection={'column'}>
                <Box position="relative">
                  <ModalCloseButton position={'absolute'} right="0" top={0} />
                </Box>
                <Box>{header}</Box>
              </Flex>
            </ModalHeader>
          )}

          <ModalBody overflow={isFixedHeader ? 'auto' : 'inherit'}>
            {children}
          </ModalBody>

          {footer && <ModalFooter gap={2}>{footer}</ModalFooter>}
        </ModalContent>
      </ModalChakra>
    </>
  );
}

export default forwardRef(Modal);
