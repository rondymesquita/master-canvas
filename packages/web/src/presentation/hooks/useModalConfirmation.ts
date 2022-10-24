import { useEffect, useState } from 'react';
import { CanvasService } from '../../infra/rest/canvas.service';
import { useModalContext } from '../../presentation/contexts/ModalContext';
import {
  ModalResultModel,
  ModalResultTypeModel,
  ModalTypeModel,
  ModalModel,
} from '../../domain/ui/modal';
import { waitPromise } from '../../util/waitpromise';

export default function useModalConfirmation(): [
  (modal: ModalModel) => void,
  () => ModalResultModel
] {
  const {
    onOpen,
    setModal: setModalInContext,
    waitModalResult,
  } = useModalContext();

  const showAndGetResult = (): ModalResultModel => {
    let onPrimaryCallback: () => void;
    let onSecondaryCallback: () => void;

    const destroyCallbacks = () => {
      onPrimaryCallback = null;
      onSecondaryCallback = null;
    };

    const modalResult: ModalResultModel = {
      onPrimary: (cb: () => void) => {
        onPrimaryCallback = cb;
        return modalResult;
      },
      onSecondary: (cb: () => void) => {
        onSecondaryCallback = cb;
        return modalResult;
      },
    };

    waitModalResult(async (r: ModalResultTypeModel) => {
      r == ModalResultTypeModel.PRIMARY
        ? onPrimaryCallback && (await onPrimaryCallback())
        : onSecondaryCallback && (await onSecondaryCallback());

      destroyCallbacks();
    });

    onOpen();

    return modalResult;
  };

  const setModal = (modal: ModalModel) => {
    setModalInContext(modal);
  };

  return [setModal, showAndGetResult];
}
