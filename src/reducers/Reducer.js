export default (state = {}, action) => {
  const {id, title, timestamp, votes, content, sortMethod} = action;
  switch (action.type) {
    case "ADD_POST":
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
    case "UPDATE_SORT_METHOD":
      return Object.assign({}, state, {
        sortMethod: sortMethod
      });   
    case "UPVOTE_POST":
      return Object.assign({}, state, {
        posts: { ...state.posts,
          [id]: { ...state.posts[id],
            votes: state.posts[id].votes + 1
          }
        }
      });
    case "DOWNVOTE_POST":
      return Object.assign({}, state, {
        posts: { ...state.posts,
          [id]: { ...state.posts[id],
            votes: state.posts[id].votes - 1
          }
        }
      });
    default:
      return {posts: {}, sortMethod: "Popular"};
  }
}