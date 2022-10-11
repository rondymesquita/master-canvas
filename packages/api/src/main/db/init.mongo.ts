import mongoose, { connect, createConnection } from 'mongoose';
import { Env } from '../../config/env';

export const initDB = async () => {
  try {
    await connect(Env().DB_HOST, {
      user: Env().DB_USER,
      pass: Env().DB_PASS,
      dbName: Env().DB_NAME,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });

    mongoose.connection.on('connecting', () => console.log('mongo connecting'));
    mongoose.connection.on('connected', () => console.log('mongo connected'));
    mongoose.connection.on('reconnected', () =>
      console.log('mongo reconnected'),
    );
    mongoose.connection.on('disconnected', () =>
      console.log('mongo disconnected'),
    );
    mongoose.connection.on('error', () => console.log('mongo close'));
    mongoose.connection.on('close', () => console.log('mongo close'));

    // await connection.asPromise();
    console.log('mongo initialized');
  } catch (err) {
    console.error(err);
  }
};
