import { ModalEvent } from '../../domain/model/events';
import { Bus } from '../../util/Bus';
import React, { useEffect, useState, useContext, useRef } from 'react';
import useDisclosure from '../hooks/useDisclosure';
import { JsxElement } from 'typescript';
import {
  ModalModel,
  ModalResultTypeModel,
  ModalTypeModel,
} from '../../domain/ui/modal';

export type ModalContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleModalVisibility: () => void;
  modal: ModalModel;
  setModal: React.Dispatch<React.SetStateAction<ModalModel>>;
  modalResult: ModalResultTypeModel;
  setModalResult: React.Dispatch<React.SetStateAction<ModalResultTypeModel>>;
  waitModalResult: (callback: CallbackType) => void;
};

export const ModalContext = React.createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const useModalContext = () => useContext(ModalContext);

type CallbackType = (r: ModalResultTypeModel) => void;

export function ModalProvider({ children }: any) {
  const [isOpen, onOpen, onClose] = useDisclosure();

  const [modal, setModal] = useState<ModalModel>();
  const [modalResult, setModalResult] = useState<ModalResultTypeModel>(null);
  const waitModalResultCallback = useRef<CallbackType>();

  const waitModalResult = (callback: CallbackType) => {
    waitModalResultCallback.current = callback;
  };

  useEffect(() => {
    modalResult && waitModalResultCallback.current(modalResult);
  }, [modalResult]);

  useEffect(() => {
    !isOpen && setModalResult(null);
  }, [isOpen]);

  const value = {
    isOpen,
    onOpen,
    onClose,
    toggleModalVisibility: isOpen ? onClose : onOpen,
    modal,
    setModal,
    modalResult,
    setModalResult,
    waitModalResult,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
