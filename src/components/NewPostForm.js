import React from 'react';
import {v4} from 'uuid';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function NewPostForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const {dispatch} = props;
    const action = {
      type: "ADD_POST",
      id: v4(),
      title: event.target.title.value,
      timestamp: new Date(),
      votes: 0,
      content: event.target.content.value
    }
    dispatch(action);
    props.toggleFunc();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="post title" required/>
        <br/>
        <textarea name="content" placeholder="type your post here..." required />
        <br/>
        <button type="submit">Submit Post!</button>
        <button type="button" onClick={props.toggleFunc}>Cancel</button>
      </form>
    </React.Fragment>
  )
}

NewPostForm.propTypes = {
  toggleFunc: PropTypes.func
};

NewPostForm = connect()(NewPostForm);

export default NewPostForm;