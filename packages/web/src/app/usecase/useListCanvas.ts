import axios from 'axios';
import { useEffect, useState } from 'react';
import { CanvasModel } from '../../domain/canvas';
import { CanvasService } from '../../infra/rest/canvas.service';
import { waitPromise } from '../../util/waitpromise';
import { QueryClient, useQuery } from '@tanstack/react-query';

export default function useListCanvas(): any {
  let service: CanvasService;
  service = new CanvasService();

  const [error, setError] = useState(null);

  const list = async (canvas: CanvasModel) => {
    const [response, err] = await waitPromise(() => service.list());
    // console.log({ response });

    err && setError(err);
    return response?.data;
  };

  return [list, error];
}
