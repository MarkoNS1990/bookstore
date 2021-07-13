import PropTypes from 'prop-types';
import '../styles/Book.css';
import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import EditBookForm from '../containers/EditBookForm';
import Comments from './Comments';
import '../styles/Comments.css';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleComments, setToggleComments] = useState(false);
  const progress = Math.floor(Math.random() * 100);
  const handleEditClick = () => {
    setToggleShow(!toggleShow);
  };
  const handleCommentsClick = () => {
    setToggleComments(!toggleComments);
  };

  return (
    <>
      <div className="item">
        <div className="left">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">Suzanne Collins</p>
          <div className="action-buttons">
            <button type="button" className="item-link" onClick={handleCommentsClick}>Comments</button>
            <button type="button" className="item-link remove" onClick={handleRemoveBook}>Remove</button>
            <button type="button" className="item-link" onClick={handleEditClick}>Edit</button>
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
