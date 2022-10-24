import React from 'react';
import Modal from '../components/Modal';
import { useModalContext } from '../contexts/ModalContext';

export default function ModalContainer() {
  const { isOpen, onOpen, onClose, modal, setModalResult } = useModalContext();

  return (
    isOpen && (
      <Modal
        onCloseComplete={() => ({})}
        title={modal.title}
        type={modal.type}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setModalResult={setModalResult}
        primaryLabel={modal.primaryLabel}
        secondaryLabel={modal.secondaryLabel}
      >
        <>{modal.content}</>
      </Modal>
    )
  );
}
