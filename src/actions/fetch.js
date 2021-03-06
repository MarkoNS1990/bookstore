import {
  fetchBooksSuccess, fetchBooksFailure, fetchBooksBegin, createBook, removeBook, editBook,
  createComment,
} from './index';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetchBooks() {
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return fetch('https://good-bookstore-api.herokuapp.com')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchBooksSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchBooksFailure(error)));
  };
}

export function fetchAddBook(book) {
  return (dispatch) => fetch('https://good-bookstore-api.herokuapp.com/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: book.title, category: book.category }),
  })
    .then(handleErrors)
    .then((res) => res)
    .then((json) => {
      dispatch(createBook(book));
      return json;
    })
    .catch((error) => dispatch(fetchBooksFailure(error)));
}

export function fetchRemoveBook(book) {
  return (dispatch) => fetch(`https://good-bookstore-api.herokuapp.com/books?id=${book.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleErrors)
    .then((res) => res)
    .then((json) => {
      dispatch(removeBook(book));
      return json.json();
    })
    .catch((error) => error);
}

export function fetchUpdateBook(book) {
  return (dispatch) => fetch(`https://good-bookstore-api.herokuapp.com/books?id=${book.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: book.title, category: book.category }),
  })
    .then(handleErrors)
    .then((res) => res)
    .then((json) => {
      dispatch(editBook(book));
      return json.json();
    })
    .catch((error) => error);
}

export function fetchAddComment(comment) {
  return (dispatch) => fetch(`https://good-bookstore-api.herokuapp.com/books/comments?id=${comment.book_id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: comment.content, book_id: comment.book_id }),
  })
    .then(handleErrors)
    .then((res) => res)
    .then((json) => {
      dispatch(createComment(comment));
      return json;
    })
    .catch((error) => dispatch(fetchBooksFailure(error)));
}
