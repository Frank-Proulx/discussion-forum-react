import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import upArrow from '../img/upArrow.png'
import downArrow from '../img/downArrow.png'

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
      display: "inline"
    },
    downvote: {
      display: "inline",
      marginRight: "2em"
    },
    p: {
      display: "inline",
      position: "relative",
      top: "7px",
      fontSize: "2em",
      margin: "auto"
    },
    img: {
      margin: ".5em"
    }
  };

  return(
    <React.Fragment>
      <div style={voteButtonsStyles.upvote} onClick={() => voteIncrementer("up")}>
        <img style={voteButtonsStyles.img} src={upArrow} alt="vote up" />
      </div>
      <p style={voteButtonsStyles.p}>{props.votes}</p>
      <div style={voteButtonsStyles.downvote} onClick={() => voteIncrementer("down")}>
      <img style={voteButtonsStyles.img} src={downArrow} alt="vote up" />
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