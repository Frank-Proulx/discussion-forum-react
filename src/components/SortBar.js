import React from 'react';
import SortButton from './SortButton';
import {v4} from 'uuid';

function SortBar() {

  const buttons = ["Popular", "Hated", "Newest", "Oldest"]
  return (
    <React.Fragment>
      {buttons.map(b => 
        <SortButton sortMethod={b} 
        key={v4()} />
      )}
    </React.Fragment>
  )
}

export default SortBar;