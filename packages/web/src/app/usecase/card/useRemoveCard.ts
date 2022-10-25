import { useEffect, useState } from 'react';
import { CardModel } from '../../../domain/model/card';
import { CardService } from '../../../infra/rest/card.service';
import { waitPromise } from '../../../util/waitpromise';

export default function useRemoveCard() {
  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);

  const sadsa = async (id: string) => {
    const [response, err] = await waitPromise(() => service.remove(id));
    err && setError(err);
  };

  return [sadsa, error];
}
