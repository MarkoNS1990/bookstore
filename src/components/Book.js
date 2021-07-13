import PropTypes from 'prop-types';
import '../styles/Book.css';
import React, { useState } from 'react';
import EditBookForm from '../containers/EditBookForm';
import Comments from './Comments';
import '../styles/Comments.css';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleComments, setToggleComments] = useState(false);
  const handleEditClick = () => {
    setToggleShow(!toggleShow);
  };
  const handleCommentsClick = () => {
    setToggleComments(!toggleComments);
  };

  return (
    <>
      <div className="item" id="book">
        <div className="left">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">Suzanne Collins</p>
          <div className="action-buttons">
            <a className="item-link" href="#book" onClick={handleCommentsClick}>Comments</a>
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

      </div>
      <EditBookForm book={book} toggleShow={toggleShow} setToggleShow={setToggleShow} />
      <Comments setToggleComments={setToggleComments} toggleComments={toggleComments} />
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
