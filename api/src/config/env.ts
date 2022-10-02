export interface Env {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_SECRET: string;
}

export const Env = (): Env => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
});
