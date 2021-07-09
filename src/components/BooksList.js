import React from 'react';
import { useSelector } from 'react-redux';

function BooksList() {
  const books = useSelector((state) => state);
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default BooksList;
