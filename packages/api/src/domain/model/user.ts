export interface User {
  id?: string;
  active?: boolean;
  name: string;
  email: string;
  picture: string;
  accessToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
