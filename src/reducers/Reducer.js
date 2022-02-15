export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_POST":
      const {id, title, timestamp, votes, content} = action;
      // const newPosts = Object.assign({}, state.posts, {
      //   [id]: {
      //     id: id,
      //     title: title,
      //     timestamp: timestamp,
      //     votes: votes,
      //     content: content
      //   }
      // });
      // return Object.assign({}, state, {
      //   posts: newPosts
      // });

      return Object.assign({}, state, {
        posts: { 
          [id]: {
            id: id,
            title: title,
            timestamp: timestamp,
            votes: votes,
            content: content
          }
        }
      })
    case "UPDATE_SORT_METHOD":
      const {sortMethod} = action;
      return Object.assign({}, state, {
        sortMethod: sortMethod
      });
      
    case "UPVOTE_POST":
      break;
    case "DOWNVOTE_POST":
      break;
    default:
      return {posts: {}, sortMethod: "Popular"};
  }
}