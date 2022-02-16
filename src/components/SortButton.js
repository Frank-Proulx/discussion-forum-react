import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function SortButton(props) {

  const handleClick = () => {
    const {dispatch} = props;
    const action = {
      type: "UPDATE_SORT_METHOD",
      sortMethod: props.sortMethod
    }
    dispatch(action);
  };

  return (
    <button onClick={handleClick}>{props.sortMethod}</button>
  )
}

SortButton.propTypes = {
  sortMethod: PropTypes.string
};

SortButton = connect()(SortButton);

export default SortButton;