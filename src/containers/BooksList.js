import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import fetchBooks, { fetchRemoveBook } from '../actions/fetch';

function BooksList() {
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const books = useSelector((state) => state.bookReducer.items);
  let filtered = books;
  if (filter !== 'All') {
    filtered = books.filter((book) => book.category === filter);
  }
  const handleRemoveBook = (book) => {
    dispatch(fetchRemoveBook(book));
  };
  return (
    <>
      {filtered && filtered.map((book) => (
        <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />
      ))}
    </>
  );
}

export default BooksList;
