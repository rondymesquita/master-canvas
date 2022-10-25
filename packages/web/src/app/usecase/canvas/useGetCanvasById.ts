import { useEffect, useState } from 'react';
import { CanvasModel } from '../../../domain/model/canvas';
import { CanvasService } from '../../../infra/rest/canvas.service';
import { waitPromise } from '../../../util/waitpromise';

export default function useGetCanvasById(id: string) {
  let service: CanvasService;
  service = new CanvasService();

  const [error, setError] = useState(null);
  const [data, setData] = useState<CanvasModel>(null);

  const handle = async (id: string) => {
    const [response, err] = await waitPromise<{ data: CanvasModel }>(() =>
      service.getById(id)
    );
    err && setError(err);
    setData(response.data);

    return response.data;
  };

  useEffect(() => {
    const fetch = async () => {
      await handle(id);
    };
    fetch();
  }, []);

  return [data, error];
}
