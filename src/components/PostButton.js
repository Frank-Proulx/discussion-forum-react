import React from 'react';
import PropTypes from 'prop-types';

function PostButton(props) {

  return (
    <button onClick={props.toggleFunc}>New Post</button>
  )
}

PostButton.propTypes = {
  toggleFunc: PropTypes.func
};

export default PostButton;