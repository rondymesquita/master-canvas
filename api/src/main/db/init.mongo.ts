import { connect } from 'mongoose';

export const initDB = async () => {
  await connect('mongodb://localhost:27017', {
    // user: 'root',
    // pass: 'root',
    dbName: 'canvas',
  });
  console.log('mongo initialized');
};
