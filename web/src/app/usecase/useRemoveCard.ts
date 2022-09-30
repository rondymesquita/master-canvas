import { useEffect, useState } from 'react';
import { CardModel } from '../../domain/card';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';

export default function useRemoveCard(): any {
  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);

  const remove = async (id: string) => {
    const [response, err] = await waitPromise(() => service.remove(id));
    err && setError(err);
  };

  return [remove, error];
}
