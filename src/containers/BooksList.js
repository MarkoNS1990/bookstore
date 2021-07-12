import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const filter = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  let filtered = books;
  if (filter !== 'All') {
    filtered = books.filter((book) => book.category === filter);
  }

  const handleRemoveBook = (book) => {
    dispatch({ type: 'REMOVE_BOOK', book });
  };

  return (
    <>

      <table id="books-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {filtered && filtered.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />

          ))}
        </tbody>

      </table>
    </>
  );
}

export default BooksList;
