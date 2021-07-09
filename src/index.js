import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/books';

const initialState = [{ id: Math.random() * 1000, title: 'title1', category: 'Learning' }, { id: Math.random() * 1000, title: 'title412421', category: 'Action' },
  { id: Math.random() * 1000, title: 'title43214', category: 'Sci-Fi' }];
const store = createStore(booksReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
