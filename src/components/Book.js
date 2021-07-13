import PropTypes from 'prop-types';
import '../styles/Book.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  const progress = Math.floor(Math.random() * 100);

  return (
    <>
      <div className="item">
        <div className="left">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">Suzanne Collins</p>
          <div className="action-buttons">
            <button type="button" className="item-link">Comments</button>
            <button type="button" className="item-link remove" onClick={handleRemoveBook}>Remove</button>
            <button type="button" className="item-link">Edit</button>
          </div>
        </div>
        <div className="middle">
          <CircularProgress variant="determinate" value={progress} />
          {progress}
          %
          <br />
          {' '}
          Completed
        </div>
        <div className="right">
          <p className="current right-element">Current Chapter</p>
          <p className="chapter right-element">Chapter 17</p>
          <button className="right-element btn btn-primary chapter-btn" type="button">UPDATE PROGRESS</button>

        </div>
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
