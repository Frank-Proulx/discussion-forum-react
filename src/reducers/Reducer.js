import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {id, title, timestamp, votes, content, sortMethod} = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        posts: { ...state.posts,
          [id]: {
            id: id,
            title: title,
            timestamp: timestamp,
            votes: votes,
            content: content
          }
        }
      });
    case c.UPDATE_SORT_METHOD:
      return Object.assign({}, state, {
        sortMethod: sortMethod
      });   
    case c.UPVOTE_POST:
      return Object.assign({}, state, {
        posts: { ...state.posts,
          [id]: { ...state.posts[id],
            votes: state.posts[id].votes + 1
          }
        }
      });
    case c.DOWNVOTE_POST:
      return Object.assign({}, state, {
        posts: { ...state.posts,
          [id]: { ...state.posts[id],
            votes: state.posts[id].votes - 1
          }
        }
      });
    default:
      return {posts: {}, sortMethod: "Most Popular"};
  }
}