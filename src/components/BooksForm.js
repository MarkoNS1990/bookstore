import React from 'react';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">Enter title: </label>
      <input type="text" id="title" placeholder="enter title" />
      <select>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

      </select>
    </form>
  );
}

export default BooksForm;
