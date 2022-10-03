export type dataType = any;
export type errorType = Error | any | unknown;
export const waitPromise = async (
  promise: () => Promise<any>
): Promise<[dataType, errorType]> => {
  try {
    const response = await promise();
    return [response, null];
  } catch (err) {
    return [null, err];
  }
};
