import { ConsoleLogger } from '@nestjs/common';

export interface EnvType {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_SECRET: string;
  CLIENT_HOST: string;
  HOST: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
}

const validate = (env: EnvType) => {
  const errors = [];
  Object.entries(env).forEach(([key, value]) => {
    if (!value) {
      errors.push(`Env: ${key} is not defined`);
    }
  });

  if (errors.length > 0) console.warn('\n' + errors.join('\n'));
};

export const Env = (): EnvType => {
  const env = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    CLIENT_HOST: process.env.CLIENT_HOST,
    HOST: process.env.HOST,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
  };

  validate(env);
  return env;
};
