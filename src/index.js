import React from 'react';
import ReactDOM from 'react-dom';
import './Css/App.css';
import App from './Components/App'
import DataProvider from './Redux/Store'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
