import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'



const store = createStore(reducerCounter)

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
