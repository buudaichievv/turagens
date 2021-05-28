import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
export let renderEntireTree = (store) =>{
ReactDOM.render(
  <React.StrictMode>
    <App card={store.card} sections={store.sections} country={store.country} post = {store.post}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

