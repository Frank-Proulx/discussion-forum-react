import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  const voteButtonsStyles = {
    upvote: {
      display: "inline",
      fontWeight: "800",
      fontSize: "2em",
      color: "green"
    },
    downvote: {
      display: "inline",
      fontWeight: "800",
      fontSize: "2em",
      color: "red",
      marginRight: "2em"
    },
    p: {
      display: "inline",
      fontSize: "2em"
    }
  };

  return(
    <React.Fragment>
      <div style={voteButtonsStyles.upvote} onClick={() => voteIncrementer("up")}>
        ٨
      </div>
      <p style={voteButtonsStyles.p}>{props.votes}</p>
      <div style={voteButtonsStyles.downvote} onClick={() => voteIncrementer("down")}>
        ٧
      </div>
    </React.Fragment>
  )
}

VoteButtons = connect()(VoteButtons);

VoteButtons.propTypes = {
  postId: PropTypes.string,
  votes: PropTypes.number
};

export default VoteButtons;