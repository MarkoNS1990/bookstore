import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function BooksForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const [error, setError] = useState('');

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      const book = { id: Math.ceil(Math.random() * 1000), title, category };
      dispatch({ type: 'CREATE_BOOK', book });
      setCategory('Action');
      setTitle('');
      setError('');
    } else {
      setError('Please enter a title');
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" id="title" placeholder="enter title" onChange={handleInputChange} value={title} />
      <select onChange={handleSelectChange} value={category}>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

      </select>
      <button type="submit">Submit</button>
      <p>{error}</p>
    </form>
  );
}

export default BooksForm;
