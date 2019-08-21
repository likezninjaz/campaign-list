import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
