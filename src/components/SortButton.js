import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as a from './../actions';
import Button from 'react-bootstrap/Button';

function SortButton(props) {

  const handleClick = () => {
    const {dispatch} = props;
    const action = a.updateSortMethod(props.sortMethod);
    dispatch(action);
  };

  const sortButtonStyle = {
    margin: ".25em",
  };

  return (
    <Button onClick={handleClick} className="btn-info" style={sortButtonStyle}>{props.sortMethod}</Button>
  )
}

SortButton.propTypes = {
  sortMethod: PropTypes.string
};

SortButton = connect()(SortButton);

export default SortButton;