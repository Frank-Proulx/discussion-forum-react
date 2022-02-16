import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function ReadHideButton(props) {

  const readHideButtonStyle = {
    margin: ".25em"
  }

  const buttonText = (props.detailsVisible) ? "Hide" : "Read";
  return (
    <Button onClick={props.clickFunc} className="btn btn-primary" style={readHideButtonStyle}>{buttonText}</Button>
  )
}

ReadHideButton.propTypes = {
  detailsVisible: PropTypes.bool,
  clickFunc: PropTypes.func
};

export default ReadHideButton;