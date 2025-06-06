import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  );
}