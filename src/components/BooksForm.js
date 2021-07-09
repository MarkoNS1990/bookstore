import React from 'react';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" id="title" placeholder="enter title" />
      <select>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BooksForm;
