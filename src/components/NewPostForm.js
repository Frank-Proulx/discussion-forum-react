import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import Button from 'react-bootstrap/Button';

function NewPostForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const {dispatch} = props;
    const action = a.addPost(event);
    dispatch(action);
    props.toggleFunc();
  };

  const submitButtonStyle = {
    margin: ".25em"
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="post title" required/>
        <br/>
        <textarea name="content" placeholder="type your post here..." required />
        <br/>
        <Button type="submit" className="btn-success" style={submitButtonStyle}>Submit Post!</Button>
        <button type="button" onClick={props.toggleFunc} className="btn btn-secondary" style={submitButtonStyle}>Cancel</button>
      </form>
    </React.Fragment>
  )
}

NewPostForm.propTypes = {
  toggleFunc: PropTypes.func
};

NewPostForm = connect()(NewPostForm);

export default NewPostForm;