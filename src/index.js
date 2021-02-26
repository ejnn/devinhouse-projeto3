import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.css'

import { Provider } from "react-redux";
import store from "redux/store.js";
import makeServer from "utils/mirage.js";

const mockServer = makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
