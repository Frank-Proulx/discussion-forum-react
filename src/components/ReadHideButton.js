import React from 'react';

function ReadHideButton(props) {

  const buttonText = (props.detailsVisible) ? "Hide" : "Read";
  return (
    <button onClick={props.clickFunc}>{buttonText}</button>
  )
}

export default ReadHideButton;