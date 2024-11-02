import React from 'react';
import ReactDOM from 'react-dom/';
import App from '../src/App/App';

ReactDOM.render(
  <React.StrictMode>
    <div> hello </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the second parameter in React 17
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
