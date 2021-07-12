import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/BooksForm.css';

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
    <div className="form-div">
      <hr />
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form onSubmit={onFormSubmit} className="form">
        <input className="title-input form-control" type="text" id="title" placeholder="Book title" onChange={handleInputChange} value={title} />
        <select className="form-select" onChange={handleSelectChange} value={category} placeholder="Category">
          {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

        </select>
        <button className="submit btn btn-primary chapter-btn" type="submit">ADD BOOK</button>
        <p>{error}</p>
      </form>
    </div>
  );
}

export default BooksForm;
