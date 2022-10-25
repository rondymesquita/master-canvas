import { CanvasModel } from '../../domain/model/canvas';
import { useEffect, useState } from 'react';
import { CanvasService } from '../../infra/rest/canvas.service';
import { waitPromise } from '../../util/waitpromise';

export default function useUpdateCanvas() {
  let service: CanvasService;
  service = new CanvasService();

  const [error, setError] = useState(null);

  const fn = async (canvas: CanvasModel) => {
    const [response, err] = await waitPromise(() => service.update(canvas));
    err && setError(err);
  };

  return [fn, error];
}
