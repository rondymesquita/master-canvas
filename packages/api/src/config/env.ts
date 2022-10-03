import { ConsoleLogger } from '@nestjs/common';

export interface EnvType {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_SECRET: string;
}

const validate = (env: EnvType) => {
  const errors = [];
  Object.entries(env).forEach(([key, value]) => {
    if (!value) {
      errors.push(`Env: ${key} is not defined`);
    }
  });

  if (errors.length > 0) throw new Error('\n' + errors.join('\n'));
};

export const Env = (): EnvType => {
  const env = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  };

  validate(env);
  return env;
};
