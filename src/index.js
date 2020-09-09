import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from "styled-components"
import {Provider} from "react-redux";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
        <GlobalStyle/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
