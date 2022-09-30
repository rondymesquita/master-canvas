export const waitPromise = async (
  promise: () => Promise<any>
): Promise<any> => {
  try {
    const response = await promise();
    return [response, null];
  } catch (err) {
    return [null, err];
  }
};
