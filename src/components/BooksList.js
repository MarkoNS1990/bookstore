import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';

function BooksList() {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch({ type: 'REMOVE_BOOK', book });
  };
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />
        ))}
      </tbody>

    </table>
  );
}

export default BooksList;
