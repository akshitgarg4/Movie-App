import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';



import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//main reducer that will handle the store
const store =createStore(rootReducer,applyMiddleware(thunk));
console.log('store',store);




ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

