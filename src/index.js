import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Photography from './pages/photography/photography.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="photography/*" element={<Photography />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
