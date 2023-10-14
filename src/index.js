import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/action/store';

ReactDOM.render(
  <BrowserRouter>
       <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
