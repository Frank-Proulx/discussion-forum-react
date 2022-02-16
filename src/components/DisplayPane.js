import React from 'react';
import NewPostArea from './NewPostArea';
import Post from './Post';
import {v4} from 'uuid';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class DisplayPane extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      detailModePosts: []
    }
  }

  toggleDetailMode = (id) => {
    (this.state.detailModePosts.includes(id)) ?
      this.setState({detailModePosts: this.state.detailModePosts.filter(i => i !== id)}) :
      this.setState({detailModePosts: this.state.detailModePosts.concat(id)});
  }

  render() {
    return(
      <React.Fragment>
        <NewPostArea/>
        <hr/>
        {this.props.posts.map(p => 
          <Post post={p}
            detailMode={this.state.detailModePosts.includes(p.id)}
            toggleDetailFunc={this.toggleDetailMode}
            key={v4()} />
        )}
      </React.Fragment>
    )
  }
}

const sortPosts = (posts, sortMethod) => {
  let compareFunc = null;
  switch (sortMethod) {
    case "Least Popular":
      compareFunc = (obj1, obj2) => (obj1.votes < obj2.votes) ? -1 : 1;
      break;
    case "Most Popular":
      compareFunc = (obj1, obj2) => (obj1.votes > obj2.votes) ? -1 : 1;
      break;
    case "Oldest":
      compareFunc = (obj1, obj2) => (obj1.timestamp.getTime() < obj2.timestamp.getTime()) ? -1 : 1;
      break;
    case "Newest":
      compareFunc = (obj1, obj2) => (obj1.timestamp.getTime() > obj2.timestamp.getTime()) ? -1 : 1;
      break;
    }
  return Object.values(posts).sort(compareFunc);
};

const mapStateToProps = state => {
  return {
    // props.posts is a sorted array
    posts: sortPosts(state.posts, state.sortMethod)
  };
}

DisplayPane.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

DisplayPane = connect(mapStateToProps)(DisplayPane);

export default DisplayPane;