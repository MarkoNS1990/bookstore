import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/EditBookForm.css';
import { fetchUpdateBook } from '../actions/fetch';

function EditBookForm({ book, toggleShow, setToggleShow }) {
  const [title, setTitle] = useState(book.title);
  const [category, setCategory] = useState(book.category);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  // const books = useSelector((state) => state.books);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      const editedBook = { id: book.id, title, category };
      dispatch(fetchUpdateBook(editedBook));
      setCategory('Action');
      setError('');
      setToggleShow(false);
    } else {
      setError('Please enter a title');
    }
  };

  return (
    toggleShow
    && (
      <div>
        <div className="form-div edit">
          <hr />
          <h3 className="form-title">EDIT BOOK</h3>
          <form onSubmit={onFormSubmit} className="form">
            <input className="title-input form-control" type="text" id="title" placeholder="Book title" onChange={handleInputChange} value={title} />
            <select className="form-select" onChange={handleSelectChange} value={category} placeholder="Category">
              {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

            </select>
            <button className="submit btn btn-primary chapter-btn" type="submit">Save</button>
            <p>{error}</p>
          </form>
        </div>
      </div>
    )
  );
}
EditBookForm.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

  }).isRequired,
  toggleShow: PropTypes.bool.isRequired,
  setToggleShow: PropTypes.func.isRequired,
};
export default EditBookForm;
