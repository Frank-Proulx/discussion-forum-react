import React from 'react';
import NewPostForm from './NewPostForm';
import PostButton from './PostButton';

class NewPostArea extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  toggleForm() {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  render() {
    const postAreaContent = (this.state.showForm) ? <NewPostForm toggleFunc={this.toggleForm} /> : <PostButton toggleFunc={this.toggleForm} />;
    return (
      <React.Fragment>
        {postAreaContent}
      </React.Fragment>
    )
  }
}

export default NewPostArea;