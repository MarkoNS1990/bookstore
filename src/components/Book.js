import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={handleRemoveBook}>Remove book</button></td>
    </tr>
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
