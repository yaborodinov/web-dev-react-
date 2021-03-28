import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import initialState from "./store/initialState"

const store = createStore(rootReducer, initialState);   // создается хранилище 1 параметр будет изменять состояние хранилище. 2-й начальные данные нашего хранилища, если они есть

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
