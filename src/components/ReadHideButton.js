import React from 'react';
import PropTypes from 'prop-types';

function ReadHideButton(props) {

  const buttonText = (props.detailsVisible) ? "Hide" : "Read";
  return (
    <button onClick={props.clickFunc}>{buttonText}</button>
  )
}

ReadHideButton.propTypes = {
  detailsVisible: PropTypes.bool,
  clickFunc: PropTypes.func
};

export default ReadHideButton;