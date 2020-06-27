import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//main reducer that will handle the store
const store =createStore(rootReducer);
console.log('store',store);




ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

