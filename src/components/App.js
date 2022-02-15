import React from 'react';
import Header from './Header';
import SortBar from './SortBar';
import DisplayPane from './DisplayPane';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <SortBar/>
      <DisplayPane/>
    </React.Fragment>
  );
}

export default App;
