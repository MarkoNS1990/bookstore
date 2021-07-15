import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchAddComment } from '../actions/fetch';
import '../styles/Comments.css';

function Comments({ toggleComments, commentsApi, bookApi }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Math.ceil(Math.random() * 1000),
      content: comment,
      book_id: bookApi.id,
    };
    dispatch(fetchAddComment(newComment));
    setComments([...comments, comment]);
    setComment('');
  };
  return (
    toggleComments
    && (
      <div className="comments-div">
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="form-control comments-input" placeholder="enter your comment..." onChange={handleInputChange} value={comment} />
          <button className="btn btn-primary btn-sm" type="submit">Post</button>
          {commentsApi && commentsApi.map((comm) => (
            <div className="comment" key={Math.random() * 1000}>
              {comm.content}
            </div>
          ))}
          {comments.map((comm) => <div className="comment" key={Math.random() * 1000}>{comm}</div>)}

        </form>
      </div>
    )
  );
}
Comments.defaultProps = {
  commentsApi: [],
};

Comments.propTypes = {
  toggleComments: PropTypes.bool.isRequired,
  commentsApi: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    book_id: PropTypes.number.isRequired,
  })),
  bookApi: PropTypes.shape({
    id: PropTypes.number.isRequired,

  }).isRequired,
};

export default Comments;
