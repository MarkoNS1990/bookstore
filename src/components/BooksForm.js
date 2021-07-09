import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function BooksForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  useEffect(() => {
    console.log(category);
  }, [category]);
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const book = { id: Math.random() * 1000, title, category };
    dispatch({ type: 'CREATE_BOOK', book });
    setCategory('');
    setTitle('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" id="title" placeholder="enter title" onChange={handleInputChange} value={title} />
      <select onChange={handleSelectChange} value={category}>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BooksForm;
