import { CardModel } from '../../domain/card';
import { useState } from 'react';
import { CardService } from '../../infra/rest/card.service';
import { waitPromise } from '../../util/waitpromise';

export default function useUpdateCard() {
  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);

  const fn = async (card: CardModel) => {
    const [response, err] = await waitPromise(() => service.update(card));
    err && setError(err);
  };

  return [fn, error];
}
