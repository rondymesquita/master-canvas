import { Button, Icon } from '@chakra-ui/react';
import React, { forwardRef, useRef } from 'react';
import { FaSave, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { ModalResultTypeModel, ModalTypeModel } from '../../domain/ui/modal';
import Modal from './Modal';

export interface DialogProps {
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
}

export default forwardRef(ConfirmationDialog);
function ConfirmationDialog(
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
    footer = <></>,
  }: DialogProps,
  ref: any
) {
  const secondaryButtonRef = useRef();

  const primaryButtonColor: Record<string, string> = {
    [ModalTypeModel.INFO]: 'primary',
    [ModalTypeModel.DESTRUCTIVE]: 'destructive',
  };

  const primaryButtonIcon: Record<string, IconType> = {
    [ModalTypeModel.INFO]: FaSave,
    [ModalTypeModel.DESTRUCTIVE]: FaTrashAlt,
  };

  return (
    <>
      <Modal
        title={title}
        initialFocusRef={secondaryButtonRef}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        // onCloseComplete={() => {
        // 	onCloseComplete && onCloseComplete();
        // }}
        size={size}
        header={header}
        footer={
          <>
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
          </>
        }
      >
        {children}
      </Modal>
    </>
  );
}
