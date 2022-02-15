import React from 'react';
import NewPostArea from './NewPostArea';
import {v4} from 'uuid';
import {connect} from 'react-redux';

function DisplayPane(props) { 
  return(
    <React.Fragment>
      <NewPostArea/>
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
    case "votesAscending" :
      compareFunc = (obj1, obj2) => (obj1.votes > obj2.votes) ? -1 : 1;
      break;
    case "votesDescending" :
      compareFunc = (obj1, obj2) => (obj1.votes < obj2.votes) ? -1 : 1;
      break;
    case "dateAscending" :
      compareFunc = (obj1, obj2) => (obj1.timestamp.getTime() > obj2.timestamp.getTime()) ? -1 : 1;
      break;
    case "dateDescending" :
      compareFunc = (obj1, obj2) => (obj1.timestamp.getTime() < obj2.timestamp.getTime()) ? -1 : 1;
      break;
    }
  return Object.values(props.posts).sort(compareFunc);
};

const mapStateToProps = state => {
  return {
    // props.posts is a sorted array
    posts: sortPosts(state.posts, state.sortMethod)
  };
}

DisplayPane = connect(mapStateToProps)(DisplayPane);

export default DisplayPane;