import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './../src/styles/index.css';
import { Provider } from 'react-redux';
import store from './features/store';


import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>



);

