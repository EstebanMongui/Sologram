import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { Provider } from 'react-redux'
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);