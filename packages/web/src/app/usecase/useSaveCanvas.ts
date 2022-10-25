import { useEffect, useState } from 'react';
import { CanvasModel } from '../../domain/model/canvas';
import { CanvasService } from '../../infra/rest/canvas.service';
import { waitPromise } from '../../util/waitpromise';

export default function useSaveCanvas(): any {
  let service: CanvasService;
  service = new CanvasService();

  const [error, setError] = useState(null);

  const save = async (canvas: CanvasModel) => {
    const [response, err] = await waitPromise(() => service.save(canvas));
    err && setError(err);
  };

  return [save, error];
}
