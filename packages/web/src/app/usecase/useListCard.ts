import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardModel } from '../../domain/card';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';
import { QueryClient, useQuery } from '@tanstack/react-query';

export default function useListCard() {
  // const { data, isError } = useQuery<CardModel[]>(['/cards'], () =>
  //   service.list()
  // );

  const service: CardService = new CardService();

  const [error, setError] = useState(null);

  const list = async (canvasId: string) => {
    console.log({ canvasId });

    const [response, err] = await waitPromise<CardModel[]>(() =>
      service.list(canvasId)
    );
    err && setError(err);
    return response;
  };

  return [list, error];
}
