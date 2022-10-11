export type errorType = Error | any | unknown;

export const waitPromise = async <T extends unknown>(
  promise: () => Promise<any>
): Promise<[T, errorType]> => {
  try {
    const response: T = await promise();
    return [response, null];
  } catch (err) {
    return [null as T, err];
  }
};
