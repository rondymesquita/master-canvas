import { useState, useEffect } from 'react';
import { Health } from '../../../domain/health';
import { HealthService } from '../../../infra/rest/health.service';
import { waitPromise } from '../../../util/waitpromise';

export default function useGetAppHealth(): [
  // () => Promise<Health>,
  Health,
  unknown
] {
  const service = new HealthService();
  const [error, setError] = useState(null);
  const [data, setData] = useState<Health>(null);

  const handle = async () => {
    const [response, err] = await waitPromise<{ data: Health }>(() =>
      service.get()
    );
    console.log({ response, err });
    err && setError(err);

    setData(response.data);
    return response.data;
  };

  useEffect(() => {
    const fetch = async () => {
      await handle();
    };
    fetch();
  }, []);

  return [data, error];
}
