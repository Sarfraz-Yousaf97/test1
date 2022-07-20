import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import store from './Redux/Store'
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <StrictMode>
    <BrowserRouter>
       <Provider store = {store}>
         <App />
      </Provider>
    </BrowserRouter>
    </StrictMode>,
  </React.StrictMode>,
  document.getElementById('root')
);

