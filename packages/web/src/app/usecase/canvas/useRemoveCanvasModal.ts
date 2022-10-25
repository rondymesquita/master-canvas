import { useEffect, useState } from 'react';
import { CanvasService } from '../../../infra/rest/canvas.service';
import { useModalContext } from '../../../presentation/contexts/ModalContext';
import {
  ModalResultModel,
  ModalResultTypeModel,
  ModalTypeModel,
} from '../../../domain/ui/modal';
import useModalConfirmation from '../../../presentation/hooks/useModalConfirmation';
import { waitPromise } from '../../../util/waitpromise';

export default function useRemoveCanvasModal(): [() => ModalResultModel] {
  const [setModal, showAndGetResult] = useModalConfirmation();

  const handle = () => {
    setModal({
      type: ModalTypeModel.DESTRUCTIVE,
      title: 'Apagar Canvas',
      content: 'Deseja apagar o canvas? Essa ação não poderá ser desfeita.',
      primaryLabel: 'Apagar',
      secondaryLabel: 'Manter',
    });
    return showAndGetResult();
  };

  return [handle];
}
