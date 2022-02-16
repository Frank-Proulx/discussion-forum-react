import React from 'react';
import { connect } from 'react-redux';

function VoteButtons(props) {

  const voteIncrementer = (direction) => {
    const { dispatch } = props;
    const action = {id: props.postId};
    if (direction === "up") {
      dispatch({...action, type: "UPVOTE_POST"});
    } else if (direction === "down") {
      dispatch({...action, type: "DOWNVOTE_POST"});
    }
  }

  return(
    <React.Fragment>
      <div onClick={() => voteIncrementer("up")}>
        <p>upvote</p>
      </div>
      <div onClick={() => voteIncrementer("down")}>
        <p>downvote</p>
      </div>
    </React.Fragment>
  )
}

VoteButtons = connect()(VoteButtons);

export default VoteButtons;