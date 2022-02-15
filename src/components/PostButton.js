import React from 'react';

function PostButton(props) {

  return (
    <button onClick={props.toggleFunc}>Post</button>
  )
}

export default PostButton;