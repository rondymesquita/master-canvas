import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardModel } from '../../domain/card';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';
import { QueryClient, useQuery } from '@tanstack/react-query';

export default function useListCard(): any {
  // let service: CardService;
  // service = new CardService();

  // const { data, isError } = useQuery<CardModel[]>(['/cards'], () =>
  //   service.list()
  // );

  // return [data, isError];
  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  const list = async (card: CardModel) => {
    const [response, err] = await waitPromise(() => service.list());
    err && setError(err);
    // setData(response.data);
    return response.data;
  };

  return [list, error];
}
