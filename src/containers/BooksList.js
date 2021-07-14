import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import fetchBooks, { fetchRemoveBook } from '../actions/fetch';

function BooksList() {
  const [booksApi, setBooksApi] = useState([]);
  const filter = useSelector((state) => state.filter);
  // const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks()).then((data) => setBooksApi(data));
  }, []);

  let filtered = booksApi;
  if (filter !== 'All') {
    filtered = booksApi.filter((book) => book.category === filter);
  }

  const handleRemoveBook = (book) => {
    dispatch({ type: 'REMOVE_BOOK', book });
    fetchRemoveBook(book);
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
