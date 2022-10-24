import React from 'react';
import Modal from '../components/Modal';
import { useModal } from '../contexts/ModalContext';

export default function ModalContainer() {
  const { isOpen, onOpen, onClose, modal, setModalResult } = useModal();

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
