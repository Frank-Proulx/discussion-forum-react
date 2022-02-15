import React from 'react';
import NewPostForm from './NewPostForm';
import {connect} from 'react-redux';

function NewPostArea(props) {
  const postForm = (props.showForm) ? <NewPostForm /> : <PostButton />;

  return (
    <React.Fragment>
      {postForm}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  showForm = state.isPosting
}

NewPostArea = connect(mapStateToProps)(NewPostArea);

export default NewPostArea;

