import { useEffect, useState } from 'react';
import { CanvasService } from '../../infra/rest/canvas.service';
import { useModal } from '../../presentation/contexts/ModalContext';
import {
  ModalHandleResult,
  ModalResultModel,
  ModalTypeModel,
} from '../../presentation/domain/modal';
import { waitPromise } from '../../util/waitpromise';

export default function useRemoveCanvasModal() {
  const { onOpen, setModal, modalResult, waitModalResult } = useModal();

  const handle = () => {
    let onPrimaryCallback: () => void;
    let onSecondaryCallback: () => void;

    const destroy = () => {
      onPrimaryCallback = null;
      onSecondaryCallback = null;
    };

    setModal({
      type: ModalTypeModel.DESTRUCTIVE,
      title: 'Apagar Registro',
      content: 'Deseja apagar o canvas? Essa ação não poderá ser desfeita.',
      primaryLabel: 'Apagar',
      secondaryLabel: 'Cancelar',
    });

    onOpen();

    const handleResult: ModalHandleResult = {
      onPrimary: (cb: any) => {
        onPrimaryCallback = cb;
        return handleResult;
      },
      onSecondary: (cb: any) => {
        onSecondaryCallback = cb;
        return handleResult;
      },
    };

    waitModalResult(async (r: ModalResultModel) => {
      r == ModalResultModel.PRIMARY
        ? await onPrimaryCallback()
        : await onSecondaryCallback();

      destroy();
    });

    return handleResult;
  };

  return [handle];
}
