import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function EditBookForm({ book }) {
  const [title, setTitle] = useState(book.title);
  const [category, setCategory] = useState(book.category);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const books = useSelector((state) => state.books);

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
      dispatch({ type: 'EDIT_BOOK', book });
      setCategory('Action');
      setTitle('');
      setError('');
    } else {
      setError('Please enter a title');
    }
  };

  return (
    <div>
      <div className="form-div">
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
  );
}

export default EditBookForm;
