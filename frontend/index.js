import './styles/reset.css';
import './styles/styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './state/store';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// ✨ wrap <App /> with a provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
