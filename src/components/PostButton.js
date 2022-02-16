import React from 'react';

function PostButton(props) {

  return (
    <button onClick={props.toggleFunc}>New Post</button>
  )
}

export default PostButton;