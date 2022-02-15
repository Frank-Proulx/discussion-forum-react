import React from 'react';

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

export default SortButton;