import React from 'react';
import NewPostArea from './NewPostArea';
import Post from './Post';
import {v4} from 'uuid';
import {connect} from 'react-redux';

function DisplayPane(props) { 
  return(
    <React.Fragment>
      <NewPostArea/>
      <hr/>
      {props.posts.map(p => 
        <Post post={p}
          key={v4()} />
      )}
    </React.Fragment>
  )
}

const sortPosts = (posts, sortMethod) => {
  let compareFunc = null;
  switch (sortMethod) {
    case "Hated":
      compareFunc = (obj1, obj2) => (obj1.votes < obj2.votes) ? -1 : 1;
      break;
    case "Popular":
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

DisplayPane = connect(mapStateToProps)(DisplayPane);

export default DisplayPane;