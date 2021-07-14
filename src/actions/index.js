const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});

const editBook = (book) => ({
  type: 'EDIT_BOOK',
  book,
});

export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error },
});

export {
  createBook, removeBook, changeFilter, editBook,
};
