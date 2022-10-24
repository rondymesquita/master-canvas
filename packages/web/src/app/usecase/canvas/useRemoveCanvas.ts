import { useEffect, useState } from 'react';
import { CanvasService } from '../../../infra/rest/canvas.service';
import { useModal } from '../../../presentation/contexts/ModalContext';
import { ModalTypeModel } from '../../../presentation/domain/modal';
import { waitPromise } from '../../../util/waitpromise';

export default function useRemoveCanvas() {
  let service: CanvasService;
  service = new CanvasService();

  const [error, setError] = useState(null);

  const remove = async (id: string) => {
    const [response, err] = await waitPromise(() => service.remove(id));
    err && setError(err);
  };

  return [remove, error];
}
