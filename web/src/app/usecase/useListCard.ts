import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardModel } from '../../domain/card';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';
import { QueryClient, useQuery } from '@tanstack/react-query';

export default function useListCard(): any {
  // const { data, isError } = useQuery<CardModel[]>(['/cards'], () =>
  //   service.list()
  // );

  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);

  const list = async (card: CardModel) => {
    const [response, err] = await waitPromise(() => service.list());
    err && setError(err);
    return response?.data;
  };

  return [list, error];
}
