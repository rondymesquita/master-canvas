import { connect } from 'mongoose';
import { Env } from '../../config/env';

export const initDB = async () => {
  await connect(Env().DB_HOST, {
    user: Env().DB_USER,
    pass: Env().DB_PASS,
    dbName: Env().DB_NAME,
  });
  console.log('mongo initialized');
};
