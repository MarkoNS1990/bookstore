import { combineReducers } from 'redux';
// import books from './books';
import filter from './filter';
import bookReducer from './booksApiReducer';

const reducer = combineReducers({
  // books,
  filter,
  bookReducer,
});

export default reducer;
