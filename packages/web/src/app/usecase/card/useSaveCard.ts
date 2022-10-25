import { useEffect, useState } from 'react';
import { CardModel } from '../../../domain/model/card';
import { CardService } from '../../../infra/rest/card.service';
import { waitPromise } from '../../../util/waitpromise';

export default function useSaveCard(): any {
  let service: CardService;
  service = new CardService();

  const [error, setError] = useState(null);

  const save = async (card: CardModel) => {
    const [response, err] = await waitPromise(() => service.save(card));
    err && setError(err);
  };

  return [save, error];
}
