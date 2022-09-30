import React from 'react';
import ReactDOM from 'react-dom/client';
import { Env } from '../config/env';
import App from './App';
import './index.css';

Env.init('dev');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
