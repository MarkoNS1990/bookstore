import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Comments({ toggleComments }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
          {comments.map((comm) => <li key={Math.random() * 1000}>{comm}</li>)}

        </form>
      </div>
    )
  );
}

Comments.propTypes = {
  toggleComments: PropTypes.bool.isRequired,
};

export default Comments;
