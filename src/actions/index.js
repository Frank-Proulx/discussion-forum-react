import {v4} from 'uuid';

export const addPost = event => ({
  type: "ADD_POST",
  id: v4(),
  title: event.target.title.value,
  timestamp: new Date(),
  votes: 0,
  content: event.target.content.value
});

export const updateSortMethod = sortMethod => ({
  type: "UPDATE_SORT_METHOD",
  sortMethod: sortMethod
});

export const vote = (direction, id) => {
  let action;  
  if (direction === "up") {
      action = {id, type: "UPVOTE_POST"};
    } else if (direction === "down") {
      action = {id, type: "DOWNVOTE_POST"};
    }
  return action;
};