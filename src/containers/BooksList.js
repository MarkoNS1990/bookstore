import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const filter = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  let filtered;
  if (filter === 'All') {
    filtered = books;
  } else {
    filtered = books.filter((book) => book.category === filter);
  }

  const handleRemoveBook = (book) => {
    dispatch({ type: 'REMOVE_BOOK', book });
  };

  return (
    <>

      <CategoryFilter />
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
          {filtered && filtered.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />

          ))}
        </tbody>

      </table>
    </>
  );
}

export default BooksList;
