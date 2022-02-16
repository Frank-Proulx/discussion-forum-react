import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function PostButton(props) {

  const newPostButtonStyle = {
    margin: ".25em"
  };

  return (
    <Button onClick={props.toggleFunc} className="btn-warning" style={newPostButtonStyle}>New Post</Button>
  )
}

PostButton.propTypes = {
  toggleFunc: PropTypes.func
};

export default PostButton;