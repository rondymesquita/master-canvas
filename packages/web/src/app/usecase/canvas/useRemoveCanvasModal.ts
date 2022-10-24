import { useEffect, useState } from 'react';
import { CanvasService } from '../../../infra/rest/canvas.service';
import { useModalContext } from '../../../presentation/contexts/ModalContext';
import {
  ModalResultModel,
  ModalResultTypeModel,
  ModalTypeModel,
} from '../../../presentation/domain/modal';
import useModalConfirmation from '../../../presentation/hooks/useModalConfirmation';
import { waitPromise } from '../../../util/waitpromise';

export default function useRemoveCanvasModal(): [() => ModalResultModel] {
  const [setModal, showAndGetResult] = useModalConfirmation();

  const handle = () => {
    setModal({
      type: ModalTypeModel.DESTRUCTIVE,
      title: 'Apagar Registro',
      content: 'Deseja apagar o registro? Essa ação não poderá ser desfeita.',
      primaryLabel: 'Apagar',
      secondaryLabel: 'Cancelar',
    });
    return showAndGetResult();
  };

  return [handle];
}
