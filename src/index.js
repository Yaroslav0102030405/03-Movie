import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './CSS/Base.css';
import App from './App';

import 'modern-normalize/modern-normalize.css';

import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
