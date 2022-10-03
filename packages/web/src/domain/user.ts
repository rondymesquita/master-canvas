export type Provider = 'google';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  provider: Provider;
}
