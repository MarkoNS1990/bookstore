import PropTypes from 'prop-types';
import '../styles/Book.css';
import EditBookForm from '../containers/EditBookForm';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;

  return (
    <>
      <div className="item" id="book">
        <div className="left">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">Suzanne Collins</p>
          <div className="action-buttons">
            <a className="item-link" href="#book">Comments</a>
            <a className="item-link remove" onClick={handleRemoveBook} href="#book">Remove</a>
            <a className="item-link" href="#book" onClick={handleEditClick}>Edit</a>
          </div>
        </div>
        <div className="middle">
          64%
          <br />
          {' '}
          Completed
        </div>
        <div className="right">
          <p className="current">Current Chapter</p>
          <p className="chapter">Chapter 17</p>
          <button className="btn btn-primary chapter-btn" type="button">UPDATE PROGRESS</button>

        </div>
        <EditBookForm book={book} />
      </div>

    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
